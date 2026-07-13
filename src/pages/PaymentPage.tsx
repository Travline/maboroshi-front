import React, { useState, useEffect, useRef, type FormEvent } from "react";
import { APIProvider, Map, Marker, useMapsLibrary } from "@vis.gl/react-google-maps";
import { ENV } from "../api/environment";
import styles from "./PaymentPage.module.css";
import { CardPayment, initMercadoPago } from "@mercadopago/sdk-react";

interface Coordinates {
  lat: number;
  lng: number;
}

interface PlaceAutocompleteInputProps {
  onPlaceSelect: (coords: Coordinates) => void;
}

const DEFAULT_CENTER: Coordinates = { lat: -12.046374, lng: -77.042793 };

initMercadoPago(ENV.VITE_MP_PUBLIC_KEY, {
  locale: "es-PE"
})

export const PaymentPage = () => {
  const [selectedLocation, setSelectedLocation] = useState<Coordinates>(DEFAULT_CENTER);
  const [zoom, setZoom] = useState<number>(14);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Procesando pago con ubicación:", selectedLocation);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Formulario de Envio</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <label htmlFor="name" className={styles.label}>Nombre</label>
          <input type="text" name="name" id="name" className={styles.input} required />
        </div>

        <div className={styles.group}>
          <label htmlFor="email" className={styles.label}>Correo</label>
          <input type="email" name="email" id="email" className={styles.input} required />
        </div>

        <div className={styles.group}>
          <label htmlFor="tel" className={styles.label}>Teléfono</label>
          <input type="tel" name="tel" id="tel" className={styles.input} required />
        </div>

        <APIProvider apiKey={ENV.VITE_MAPS_KEY}>
          <div className={styles.group}>
            <label className={styles.label}>Dirección de Entrega</label>

            <PlaceAutocompleteInput
              onPlaceSelect={(coords: Coordinates) => {
                setSelectedLocation(coords);
                setZoom(17);
              }}
            />

            <div className={styles.mapContainer}>
              <Map
                gestureHandling="greedy"
                disableDefaultUI
                center={selectedLocation}
                zoom={zoom}
                onZoomChanged={(ev) => setZoom(ev.detail.zoom)}
              >
                <Marker position={selectedLocation} />
              </Map>
            </div>
          </div>
        </APIProvider>

        <CardPayment
          initialization={{ amount: 1.00 }}
          onSubmit={async (param) => {
            console.log(param);
          }}
        />

        <button type="submit" className={styles.submitBtn}>Ir a pagar</button>
      </form>
    </div>
  );
};

const PlaceAutocompleteInput: React.FC<PlaceAutocompleteInputProps> = ({ onPlaceSelect }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);

  const placesLibrary = useMapsLibrary("places");

  useEffect(() => {
    if (!placesLibrary || !inputRef.current) return;

    const options: google.maps.places.AutocompleteOptions = {
      fields: ["geometry", "formatted_address"]
    };

    const googleAutocomplete = new placesLibrary.Autocomplete(inputRef.current, options);
    setAutocomplete(googleAutocomplete);
  }, [placesLibrary]);

  useEffect(() => {
    if (!autocomplete) return;

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      if (place.geometry && place.geometry.location) {
        const coords: Coordinates = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        };
        onPlaceSelect(coords);
      }
    });
  }, [autocomplete, onPlaceSelect]);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Escribe tu dirección (ej. Av. Larco 123...)"
      className={styles.input}
    />
  );
};