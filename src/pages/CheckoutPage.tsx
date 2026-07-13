import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
import { ENV } from "../api/environment";
import styles from "./CheckoutPage.module.css"

export const CheckoutPage = () => {
  initMercadoPago(ENV.VITE_MP_PUBLIC_KEY, {
    locale: "es-PE"
  })

  return (
    <div className={styles.checkoutContainer}>
      <Payment
        initialization={{
          amount: 1.00,
        }}
        customization={{
          paymentMethods: {
            creditCard: "all",
            debitCard: "all",
            ticket: "all",
            bankTransfer: "all",
            atm: "all",
            mercadoPago: "all",
          },
        }}
        onSubmit={async (paymentData) => {
          console.log(paymentData)
        }}
      />
    </div>
  )
}