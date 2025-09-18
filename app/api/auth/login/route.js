import { NextResponse } from 'next/server.js';

export async function POST(request) {
  try {
    const { email, password } = await request.json();
	console.log('Variables de entorno cargadas:', {
      adminEmail: process.env.ADMIN_EMAIL,
      hasAdminPass: !!process.env.ADMIN_PASSWORD
    });

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email y contraseña son requeridos' },
        { status: 400 }
      );
    }

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      return NextResponse.json({
        success: true,
        user: { email, role: "admin" },
        redirectUrl: "/admin/citas"
      });
    }

    return NextResponse.json(
      { success: false, message: 'Credenciales incorrectas' },
      { status: 401 }
    );

  } catch {
    return NextResponse.json(
      { success: false, message: 'Error del servidor' },
      { status: 500 }
    );
  }
}
