import { NextResponse } from 'next/server.js';

export async function POST(request) {
  try {
    const citaData = await request.json();

    const camposRequeridos = [
      'nombreMascota', 'especie', 'tamaño', 'edad',
      'nombrePropietario', 'telefono', 'email', 
      'fecha', 'hora', 'servicio'
    ];

    for (const campo of camposRequeridos) {
      if (!citaData[campo]) {
        return NextResponse.json(
          { success: false, message: `Falta el campo: ${campo}` },
          { status: 400 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Cita solicitada exitosamente',
      citaId: Date.now()
    });

  } catch {
    return NextResponse.json(
      { success: false, message: 'Error al procesar la cita' },
      { status: 500 }
    );
  }
}
