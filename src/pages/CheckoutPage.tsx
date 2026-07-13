import { CardPayment, initMercadoPago } from "@mercadopago/sdk-react";
import { ENV } from "../api/environment";

export const CheckoutPage = () => {
  initMercadoPago(ENV.VITE_MP_PUBLIC_KEY, {
    locale: "es-PE"
  })

  return <CardPayment
    initialization={{ amount: 1.00 }}
    onSubmit={async (param) => {
      console.log(param);
    }}
  />
}