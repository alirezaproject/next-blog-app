import "@/styles/globals.css";
import vazirFont from "../constants/localFont";
import Header from "../components/Header";
import { Toaster } from "react-hot-toast";
import AuthProvider from "context/AuthContext";



export const metadata = {
  title: {
    template: "بلاگ اپ | %s",
    default: "بلاگ اپ",
  },
  description: "وب اپلیکیشن مدیریا بلاگ ها و نظرات کاربران",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" >
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <AuthProvider>
          <Toaster />
          <Header />
          <div className="container xl:max-w-screen-xl">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
