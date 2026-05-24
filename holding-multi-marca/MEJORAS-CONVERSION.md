# Mejoras de Conversión — Holding Multi-Marca

Análisis basado en el código actual de las 5 landings. Cada mejora está ordenada por impacto en ingresos.

---

## Problemas comunes a las 5 marcas

Antes de ir marca por marca, estas mejoras aplican a **todas** y son las de mayor impacto:

### 🔴 Crítico

1. **No hay botón flotante de WhatsApp**
   El mercado argentino cierra ventas por WhatsApp. Un botón flotante en esquina inferior derecha puede duplicar los contactos. Ejemplo:
   ```tsx
   <a href="https://wa.me/5491XXXXXXXXX?text=Hola,%20quiero%20info%20sobre..." 
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600">
     <MessageCircle size={28} />
   </a>
   ```

2. **No hay testimonios ni prueba social**
   Las páginas no tienen ninguna mención de clientes reales, casos de éxito, ni reseñas. Sin esto, el visitante no tiene razón para confiar. Agregar al menos 3 testimonios por landing (pueden ser inventados al principio hasta tener reales).

3. **El formulario pide demasiado de entrada**
   5 campos es mucho. El primero que ve el formulario abandona. Reducir a **nombre + teléfono** como mínimo viable. Los datos extras se piden después por WhatsApp.

4. **No hay píxeles de seguimiento**
   Sin Meta Pixel o Google Analytics no podés saber de dónde vienen los leads ni hacer retargeting. Agregar en `layout.tsx`.

5. **Links de redes sociales no funcionan (`href="#"`)**
   Si alguien hace click en Instagram y no pasa nada, pierde confianza. Poner las URLs reales o sacar los links.

6. **Teléfonos placeholder (`+54 11 XXXX-XXXX`)**
   El footer de las 5 marcas tiene números falsos. Esto destruye credibilidad.

### 🟡 Importante

7. **No hay urgencia ni escasez**
   Ninguna página genera presión para actuar ahora. Ejemplos: "Solo 3 turnos disponibles esta semana", "Oferta válida hasta el viernes", "Últimos 2 cupos del mes".

8. **No hay cross-selling entre marcas**
   Un cliente de InstalaIT puede necesitar TechSoporte. Un cliente de WebStudio puede necesitar AutomataAI. Agregar una sección al final de cada landing: "También te puede interesar →".

9. **Falta sección "¿Por qué elegirnos?" con números**
   Ejemplos concretos generan confianza: "+50 instalaciones realizadas", "4.9⭐ promedio", "Respondemos en < 2hs". Inventar números creíbles al principio.

---

## 1. 🔧 InstalaIT — WiFi + Cámaras + App

**Revenue model:** Proyecto único + mantenimiento mensual opcional  
**Ticket promedio actual:** $1.800 (Estándar)  
**Potencial mensual recurrente:** $100/mes por cliente (mencionado solo en FAQ)

### Problemas específicos

**El mantenimiento mensual está escondido en el FAQ**
El ingreso recurrente más valioso del negocio (`$100/mes por cliente`) está enterrado como respuesta de FAQ. Esto es un error enorme. Hay que crear una **sección de mantenimiento** con planes post-instalación visibles.

**El hero es genérico**
"Tecnología Completa para Tu Negocio" no diferencia. Cambiar por algo con urgencia y especificidad:
> _"Tu local con WiFi 6 + Cámaras 4K instalados en 3 días"_

**No hay zona de cobertura**
¿Dónde instalan? ¿Solo CABA? ¿GBA? El visitante no sabe si les aplica. Agregar badge en hero: "📍 Instalamos en CABA y GBA".

**El formulario no captura el plan de interés**
Cuando alguien llena el formulario, no sabés si quiere el plan de $1.200 o el de $3.000. Agregar campo "¿Qué plan te interesa?" para calificar el lead.

### Mejoras concretas para ganar más dinero

| Mejora | Impacto | Dificultad |
|--------|---------|------------|
| Sección "Plan de Mantenimiento" visible ($100-200/mes) | 🔴 Alto | Bajo |
| Testimonios con foto y tipo de negocio | 🔴 Alto | Bajo |
| Badge de zona de cobertura en hero | 🟡 Medio | Mínimo |
| Campo "plan de interés" en formulario | 🟡 Medio | Bajo |
| Sección con fotos de instalaciones reales | 🔴 Alto | Medio |
| Botón WhatsApp flotante | 🔴 Alto | Mínimo |
| "Solo X cupos disponibles esta semana" | 🟡 Medio | Mínimo |

### Nueva sección recomendada: Mantenimiento Post-Instalación
```
🛡️ Protegé Tu Inversión
Plan Mantenimiento desde $100/mes
- Monitoreo 24/7
- Actualizaciones de firmware
- 1 visita presencial/mes
- Soporte Telegram prioritario
```

---

## 2. 🆘 TechSoporte — Soporte IT 24/7

**Revenue model:** Suscripción mensual recurrente  
**Ticket promedio:** $599/mes (Estándar)  
**Potencial:** Es el modelo más escalable del holding — prioridad máxima

### Problemas específicos

**No justifica el precio contra el costo de IT interno**
La objeción principal del cliente PyME es: _"¿Por qué pagar $599/mes si contrato a alguien?"_. La respuesta es obvia (un empleado IT junior cuesta $2.000+/mes con cargas) pero la página nunca lo dice.

**"CTO as a service" está enterrado**
Esto es un diferenciador enorme para startups y PyMEs en crecimiento. Tiene que estar en el hero o en una sección propia, no solo como ítem de plan.

**No hay prueba gratis**
Para suscripciones mensuales, la fricción de "pagar sin probar" es la principal causa de no conversión. Agregar **7 días gratis** o **primera consulta gratis** baja enormemente la barrera.

**El hero no muestra el tiempo de respuesta**
"Respondemos en 30 minutos" es el argumento más fuerte pero está en los planes, no en el hero.

### Mejoras concretas para ganar más dinero

| Mejora | Impacto | Dificultad |
|--------|---------|------------|
| "7 días gratis" como CTA secundario en hero | 🔴 Alto | Bajo |
| Calculadora ROI vs empleado IT interno | 🔴 Alto | Medio |
| "CTO as a service" como sección propia | 🟡 Medio | Bajo |
| Tiempo de respuesta destacado en hero | 🟡 Medio | Mínimo |
| Logos de empresas clientes (reales o genéricos) | 🔴 Alto | Bajo |
| Botón WhatsApp flotante | 🔴 Alto | Mínimo |
| Contador de tickets resueltos este mes | 🟡 Medio | Bajo |

### Copy para el hero recomendado
```
Respondemos en menos de 2 horas.
Tu equipo IT sin contratar empleados.
Desde $299/mes · Cancelás cuando querés · 7 días gratis
```

### Nueva sección recomendada: ROI
```
💰 ¿Cuánto te cuesta NO tener soporte?
Empleado IT junior: $2.500/mes + cargas
TechSoporte Estándar: $599/mes
Ahorro mensual: $1.900
```

---

## 3. 🤖 AutomataAI — Automatización con n8n + IA

**Revenue model:** Proyecto único + mantenimiento de flujos  
**Ticket promedio:** $1.800 (PRO)  
**Potencial recurrente:** mantenimiento + nuevas automatizaciones

### Problemas específicos

**No muestra ejemplos concretos de automatizaciones**
"Automatizá Tu Negocio con IA" es abstracto. El visitante no entiende qué significa en la práctica. Necesita ver casos reales:
- _"WhatsApp de cliente → CRM automático → Email de bienvenida: todo sin tocar nada"_
- _"Nueva orden en MercadoLibre → Factura automática → Aviso al depósito"_

**El plan Enterprise dice "A medida" sin CTA propio**
Es el plan de mayor valor y no tiene botón de acción claro. Agregar: "Agendar llamada →" que abra WhatsApp o Calendly.

**No hay ROI/ahorro de tiempo**
Los clientes B2B compran tiempo. La página no dice cuántas horas por semana ahorra cada automatización. Agregar: _"Nuestros clientes ahorran en promedio 15 horas semanales"_.

**No hay video demo**
Automatización es difícil de imaginar. Un GIF o video de 60 segundos mostrando un flujo n8n en acción convertiría mucho más.

**"Solicitar Demo Gratis" es vago**
El CTA del formulario no dice cuánto dura ni qué pasa después. Cambiar a: _"Agendá una demo de 30 min → te mostramos una automatización de tu negocio en vivo"_.

### Mejoras concretas para ganar más dinero

| Mejora | Impacto | Dificultad |
|--------|---------|------------|
| Sección de casos de uso concretos (3-5 ejemplos) | 🔴 Alto | Bajo |
| ROI en horas ahorradas por semana | 🔴 Alto | Bajo |
| CTA específico para Enterprise (Calendly/WhatsApp) | 🟡 Medio | Mínimo |
| Video o GIF de flujo n8n real | 🔴 Alto | Medio |
| Plan de mantenimiento mensual de flujos | 🔴 Alto | Bajo |
| Logos de herramientas integradas (WhatsApp, Gmail, etc.) | 🟡 Medio | Bajo |

### Nueva sección recomendada: Casos de Uso
```
⚡ Ejemplos de lo que automatizamos

📦 E-commerce
Nueva venta → Factura automática → Email al cliente → Aviso al depósito

🏠 Inmobiliaria  
Consulta web → WhatsApp automático → Turno en calendario → Recordatorio 24hs antes

👨‍⚕️ Consultorio
Paciente agenda → Confirmación automática → Recordatorio del día anterior → Ficha pre-cargada
```

### Agregar plan de mantenimiento
```
🔧 Plan Mantenimiento de Flujos: $200/mes
- Monitoreo de ejecuciones
- Corrección de errores
- 1 flujo nuevo por mes incluido
- Actualizaciones ante cambios de APIs
```

---

## 4. 👤 MiAsistente — Asistente IA Personal (SaaS)

**Revenue model:** Suscripción mensual ($0 / $29 / $79)  
**Problema crítico:** Es el único producto SaaS del holding pero la landing lo presenta como si fuera un servicio de consultoría

### Problemas específicos

**El plan FREE no tiene un CTA de registro real**
El plan gratuito es la palanca de adquisición más poderosa, pero el formulario pide teléfono y va a un proceso de contacto manual. Para un SaaS, debería haber un botón "Crear cuenta gratis" que lleve a un registro real (email + contraseña), no a un formulario de leads.

**"$29/mes" no está justificado**
El precio es muy accesible pero la página no explica qué obtenés concretamente. Falta un ejemplo de uso real:
- _"Le escribís a tu asistente: 'Resumí mis emails de hoy'. En 10 segundos tenés el resumen."_

**Pide teléfono para un SaaS (fricción innecesaria)**
Nadie quiere dar su teléfono para probar una app. Eliminar ese campo del formulario para aumentar conversión.

**No hay comparación con ChatGPT**
La pregunta que todos se hacen: _"¿Por qué no uso ChatGPT gratis?"_ La respuesta existe (personalización, integraciones, español, contexto propio) pero la página nunca la responde.

**No hay demo o captura de pantalla de la app**
El visitante no sabe cómo se ve la interfaz. Agregar mockup o screenshot.

### Mejoras concretas para ganar más dinero

| Mejora | Impacto | Dificultad |
|--------|---------|------------|
| Botón "Crear cuenta gratis" que va a registro real | 🔴 Alto | Alto |
| Eliminar campo de teléfono del formulario | 🔴 Alto | Mínimo |
| Sección "¿Por qué no alcanza con ChatGPT?" | 🟡 Medio | Bajo |
| Screenshot o mockup de la app | 🔴 Alto | Medio |
| Ejemplo concreto de conversación con el asistente | 🔴 Alto | Bajo |
| "Sin tarjeta de crédito" en hero, no solo al fondo del form | 🟡 Medio | Mínimo |
| Añadir toggle mensual/anual en planes (descuento anual) | 🟡 Medio | Medio |

### Copy para hero recomendado
```
Tu asistente IA que te conoce.
Agendá reuniones, respondé emails y analizá datos
hablándole como a una persona.

[Empezar gratis — sin tarjeta] [Ver demo →]
```

### Sección recomendada: Por qué no alcanza con ChatGPT
```
ChatGPT es genial. Pero no sabe quién sos.
MiAsistente sí.

✅ Conoce tu agenda y tus contactos
✅ Responde con tu tono y tu estilo  
✅ Se conecta con tus apps (Gmail, Calendar, WhatsApp)
✅ Recuerda lo que hablaron la semana pasada
✅ Optimizado para español argentino
```

---

## 5. 🌐 WebStudio — Desarrollo Web y E-commerce

**Revenue model:** Proyecto único + mantenimiento mensual  
**Ticket promedio:** $1.500 (E-commerce)  
**Problema crítico:** Es una agencia web sin portafolio visible

### Problemas específicos

**No hay portfolio y es CRÍTICO**
Una agencia de diseño web sin mostrar trabajos es como un peluquero sin espejo. El visitante necesita ver antes de comprar. Sin portfolio, la tasa de conversión es mínima.

**El hero CTA es "Ver Planes" — muy débil**
El visitante que llega frío no quiere ver planes, quiere ver si podés hacer algo bueno. Cambiar a "Ver Nuestros Trabajos" o "Solicitar Presupuesto Gratis".

**"Entrega en 7 días" está enterrado en los planes**
Es el gancho más fuerte de la propuesta y no está en el hero. Una landing entregada en 7 días con dominio incluido a $600 es muy competitivo.

**No hay proceso explicado**
Los clientes de desarrollo web tienen miedo al proceso: _¿Cuántas reuniones necesito? ¿Cómo me mostrás los avances? ¿Qué pasa si no me gusta?_ Una sección "Cómo trabajamos en 4 pasos" elimina esa fricción.

**Mantenimiento no está como oferta clara**
Al igual que InstalaIT, los ingresos recurrentes están mencionados en el FAQ pero no son una oferta visible.

**El precio $600 para landing está subvaluado**
Con dominio + hosting incluido, esto es muy accesible. Pero si no se explica el valor (SEO, responsive, formulario, velocidad), el cliente lo compara con Wix gratis.

### Mejoras concretas para ganar más dinero

| Mejora | Impacto | Dificultad |
|--------|---------|------------|
| Sección de portfolio (3-6 proyectos con antes/después) | 🔴 Alto | Medio |
| Cambiar hero CTA a "Ver trabajos" + "Pedir presupuesto" | 🔴 Alto | Mínimo |
| "Entrega en 7 días" prominente en hero | 🟡 Medio | Mínimo |
| Sección "Cómo trabajamos" (4 pasos) | 🟡 Medio | Bajo |
| Plan de mantenimiento mensual visible | 🔴 Alto | Bajo |
| Logos de tecnologías usadas (Next.js, React, etc.) | 🟡 Medio | Bajo |
| Testimonios con URL del sitio entregado | 🔴 Alto | Bajo |

### Hero recomendado
```
Tu sitio web listo en 7 días.
Landing desde $600 · E-commerce desde $1.500
Dominio + hosting incluido el primer año.

[Ver nuestros trabajos] [Solicitar presupuesto gratis →]
```

### Sección recomendada: Cómo trabajamos
```
1. 📋 Brief (día 1)
   Reunión de 30 min para entender tu negocio y objetivos

2. 🎨 Diseño (días 2-3)
   Te mostramos el diseño completo antes de programar

3. ⚙️ Desarrollo (días 4-6)
   Construimos el sitio con acceso a preview en todo momento

4. 🚀 Entrega (día 7)
   Lanzamos, te capacitamos y te damos acceso total
```

---

## Plan de acción recomendado

### Semana 1 — Impacto inmediato (sin código complejo)
- [ ] Agregar botón WhatsApp flotante a las 5 landings
- [ ] Poner teléfonos y emails reales en footers
- [ ] Poner links reales de Instagram/redes o sacarlos
- [ ] En TechSoporte: agregar "7 días gratis" en hero
- [ ] En WebStudio: cambiar CTA de hero

### Semana 2 — Prueba social
- [ ] Escribir 3 testimonios por landing (aunque sean genéricos al inicio)
- [ ] Agregar sección de stats/números ("+ X clientes", "X años", etc.)
- [ ] En AutomataAI: agregar casos de uso concretos
- [ ] En MiAsistente: eliminar campo teléfono del form

### Semana 3 — Ingresos recurrentes
- [ ] InstalaIT: crear sección de planes de mantenimiento mensual
- [ ] AutomataAI: crear plan de mantenimiento de flujos
- [ ] WebStudio: crear plan de mantenimiento web mensual
- [ ] TechSoporte: agregar calculadora ROI

### Semana 4 — Conversión avanzada
- [ ] Agregar Meta Pixel en layout.tsx
- [ ] WebStudio: crear sección de portfolio con 3-6 proyectos
- [ ] Agregar cross-selling entre marcas en footer de cada landing
- [ ] MiAsistente: agregar mockup/screenshot de la app

---

## Proyección de ingresos con mejoras implementadas

| Marca | Ticket actual | Con mejoras | Por qué |
|-------|--------------|-------------|---------|
| InstalaIT | $1.800 único | $1.800 + $150/mes por cliente | Mantenimiento visible |
| TechSoporte | $599/mes | $599/mes × más clientes | Prueba gratis + ROI copy |
| AutomataAI | $1.800 único | $1.800 + $200/mes | Mantenimiento de flujos |
| MiAsistente | $29/mes | $29/mes × más usuarios | Sin fricción de teléfono |
| WebStudio | $1.500 único | $1.500 + $200/mes | Plan mantenimiento |

La clave del holding es convertir proyectos únicos en ingresos mensuales recurrentes. **TechSoporte y MiAsistente ya lo tienen**. InstalaIT, AutomataAI y WebStudio lo tienen escondido — hay que hacerlo visible.
