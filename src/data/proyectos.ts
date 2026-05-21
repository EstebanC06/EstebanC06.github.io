// src/data/proyectos.ts
// ─── AGREGA O EDITA TUS PROYECTOS AQUÍ ──────────────────────────────────────

export interface Proyecto {
	slug: string;
	titleES: string;
	titleEN: string;
	summaryES: string;
	summaryEN: string;
	descriptionES: string;
	descriptionEN: string;
	stack: string[];
	repoURL: string;
	// Rutas relativas a /public — sube tus imágenes a public/assets/CocoTechSystems/
	images: string[];
}

export const proyectos: Proyecto[] = [
	{
		slug: 'cocotechsystems',
		titleES: 'CocoTechSystems',
		titleEN: 'CocoTechSystems',
		summaryES:
			'Plataforma integral para supermercado: POS físico + e-commerce en un solo sistema.',
		summaryEN:
			'Full-featured supermarket platform: physical POS + e-commerce in a single system.',
		descriptionES: `CocoTechSystems es una plataforma completa para la gestión de un supermercado de cadena que combina un punto de venta físico (POS) y un e-commerce en un solo sistema. Permite registrar ventas con múltiples detalles, emitir facturas automáticamente, gestionar pedidos online de extremo a extremo (RECIBIDO → PREPARANDO → EN_CAMINO → ENTREGADO) y administrar clientes, empleados, sucursales y catálogo de productos. MySQL actúa como fuente de verdad transaccional (ACID), mientras que MongoDB cubre la capa de lectura intensiva sirviendo reportes, dashboards e historial sin JOINs costosos. El sistema implementa dos patrones de diseño MongoDB: Referencia Extendida para facturas embebidas con snapshot histórico, y Computado para reportes mensuales pre-calculados por sucursal. La seguridad es stateless con JWT y roles diferenciados (ADMIN, EMPLEADO, CLIENTE), incluyendo recuperación de contraseña por código enviado al correo vía SMTP.`,
		descriptionEN: `CocoTechSystems is a complete platform for managing a chain supermarket, combining a physical point-of-sale (POS) and an e-commerce in a single system. It handles sales with multiple line items, automatic invoice generation, end-to-end online order management (RECEIVED → PREPARING → ON_THE_WAY → DELIVERED), and full administration of customers, employees, branches, and product catalog. MySQL serves as the transactional source of truth (ACID), while MongoDB covers the read-intensive layer for reports, dashboards, and history without costly JOINs. The system implements two MongoDB design patterns: Extended Reference for embedded invoices with historical snapshots, and Computed for pre-calculated monthly reports per branch. Security is stateless with JWT and differentiated roles (ADMIN, EMPLOYEE, CLIENT), including password recovery by code sent via SMTP email.`,
		stack: [
			'Java 21',
			'Spring Boot 3.3.5',
			'MySQL 8',
			'MongoDB 7',
			'Spring Security + JWT',
			'React 19',
			'TypeScript',
			'Vite 6',
			'MUI v7',
			'Recharts',
			'Framer Motion',
			'Maven',
		],
		repoURL: 'https://github.com/EstebanC06/CocoTechSystems',
		// Sube tus capturas a public/assets/CocoTechSystems/ y agrégalas aquí:
		images: [
			// '/assets/CocoTechSystems/login.png',
			// '/assets/CocoTechSystems/catalogo.png',
			// '/assets/CocoTechSystems/dashboard-admin.png',
			// '/assets/CocoTechSystems/pos.png',
			// '/assets/CocoTechSystems/pedidos.png',
		],
	},
];
