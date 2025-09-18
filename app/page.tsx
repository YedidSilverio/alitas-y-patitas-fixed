import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center justify-center">
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex justify-center items-center mb-6">
          <span className="text-3xl mr-2">🐦</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Alitas y Patitas
          </h1>
          <span className="text-3xl ml-2">🐾</span>
        </div>
        
        <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
          Bienvenidos a nuestra veterinaria. Cuidamos con amor a tus compañeros más fieles.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link 
            href="/login" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Iniciar Sesión
          </Link>
          
          <Link 
            href="/obtener-cita" 
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Obtener cita
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-12">
          Tu veterinaria de confianza para el cuidado de mascotas
        </p>
      </div>
    </div>
  );
}
