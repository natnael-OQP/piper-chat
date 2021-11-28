import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),

    ],
    pages: {
        signIn:'/auth/signin',
    },
})


// *********************************** default login page ******************************* */
// theme: {
//     colorScheme: "auto", // "auto" | "dark" | "light"
//     brandColor: "#f13287", // Hex color code
//     logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/258_Pied_Piper_logo-512.png" // Absolute URL to image
// }