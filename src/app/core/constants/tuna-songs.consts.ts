import { Song } from 'src/app/core/models/song.model';

export const TUNA_SONG_NAMES: string[] = [
  "El Rey - Estudiantina De La Universidad Autonoma De Queretaro",
  "Alfonsina y el mar - Tuna Universitaria Compostelana",
  "La Estudiantina Portuguesa - Tuna Arquitectura De Madrid",
  "Tuna Compostelana - Tuna de la Facultad de Farmacia",
  "Pavana - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
  "Cintas de Mi Capa - La Tuna de la Facultad de Farmacia",
  "Mi Ciudad - Cuarentuna De La Ciudad de México",
  "La Potra Zaina - Tuna Femenina Javeriana",
  "Amor de Mis Amores - Tuna de la Facultad de Veterinaria de Madrid",
  "Adelita - Tuna Escuela De Ingenieros Tec. Barcelona",
  "Cuerdas de mi guitarra - Tuna Normalista de Puebla",
  "Bella Ciao - Estudiantina De La Universidad Autonoma De Queretaro",
  "Cinco Letras Nada Más - Tuna de la Facultad de Veterinaria de Madrid",
  "Despierta mexicana - Tuna Hispanoamericana",
  "España Cañi - Tuna Universitaria",
  "Cómo Fue - Tuna Bardos de la Universidad de Puerto Rico",
  "Despierta Niña - Tuna Universitaria de Barcelona",
  "El dia que me quieras - Tuna Universitaria Compostelana",
  "Viva la tuna - Tuna De La Facultad De Medicina de Barcelona",
  "Parate - Tuna Ciudad de Luz",
  "Despierta Carolina - Tuna de la Escuela de Peritos Industriales de Madrid",
  "Ojos De España - Tuna Universitaria De Madrid",
  "Silencio - Tuna Universitaria Compostelana",
  "Dime Que Sí - Estudiantina \"La Salle\" De Puebla",
  "El Triste - Tuna de Derecho UNAM",
  "Popurrí Quechua - Tuna Femenina Javeriana",
  "Debajo de Tu Balcón - Tuna Universitaria De Madrid",
  "La Paloma - Tuna Universitaria",
  "La Ronda de las Estrellas - Tuna de la Escuela de Peritos Industriales de Madrid",
  "Hoy - Tuna Femenina Javeriana",
  "Horas De Ronda - Tuna de la Facultad de Farmacia",
  "Clavelitos - Tuna Universitaria De Madrid",
  "Pranto - Remastered - Tuna Universitaria Compostelana",
  "Ay! Jalisco No Te Rajes - Tuna de Ingenieros de Sevilla",
  "Adios Granada - La Tuna",
  "Mari Carmen - La Tuna",
  "La Morena De Mi Copla - Tuna de la Facultad de Farmacia",
  "Recuerdos - Tuna de la Facultad de Farmacia",
  "El Pájaro Chogüi - Tuna Universitaria De Madrid",
  "Popurri del Joe - Tuna Femenina Javeriana",
  "Todos Los Besos - Los Rebujitos",
  "El aire de la calle - Los Delinquentes",
  "Entre la tierra y el cielo - Tuna Universitaria de la Ciudad de México",
  "La Banderita - Tuna de la Facultad de Derecho de Madrid",
  "La Tuna Pasa - Tuna Universitaria De Madrid",
  "La morena de mi copla - Tuna Universitaria De Valencia",
  "La Tuna Pasa - Tuna de la Facultad de Derecho de Madrid",
  "Oh Maribel - Tuna Universitaria De Madrid",
  "Mi Delito - Cuarentuna De La Ciudad de México",
  "Tico Tico - Tuna Universitaria de la Ciudad de México",
  "Dr. Zhivago - Tuna Universitaria",
  "Y Viva España - Tuna Universitaria",
  "Guantanamera - Tuna de Derecho y Económicas de la Universidad de Barcelona",
  "Aires Andaluces Nº 2 - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
  "Popurri Vasco - Tuna Decana de Madrid",
  "Ronda de estrellas - Tuna Universitaria De Córdoba",
  "Valencia - Tuna Universitaria de Barcelona",
  "Te quiero dijiste - Tuna Universitaria De Valencia",
  "El Milagro de Tus Ojos - En Vivo - Segreles",
  "Oh Maribel - Tuna de la Facultad de Veterinaria de Madrid",
  "La Bikina - Estudiantina la Trobada de Santiago - Tuna León de los Aldama",
  "Recuerdos - Tuna de la Facultad de Farmacia",
  "Las Palmeras - Tuna Universitaria de la Ciudad de México",
  "En Esta Noche Clara - Tuna Universitaria De Madrid",
  "Serenata de Aldea - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
  "Malaga - Tuna Universitaria de la Ciudad de México",
  "Chotis Madrid - Tuna Decana de Madrid",
  "Popurri Navarro - Tuna Decana de Madrid",
  "El Payador - Tuna de la Facultad de Derecho de Madrid",
  "Idilio - Tuna Imperial de la FES Iztacala-UNAM",
  "El Payador - Tuna de la Facultad de Veterinaria de Madrid",
  "Niña bonita - Tuna de Peritos Industriales de Barcelona",
  "Tema De Lara (Lara's Theme) - Estudiantina De La Universidad Autonoma De Queretaro",
  "Sin ti-Así Es La Vida - Tuna de Derecho UNAM",
  "Popurrí tuna 2 - Tuna De Ingenieros De Montes",
  "Canción Mixteca - Estudiantina De La Universidad Autonoma de Guadalajara",
  "Clavelitos - Tuna Universitaria",
  "Amparito Roca - Tuna de la Facultad de Farmacia",
  "Clavelitos - Tuna de la Facultad de Derecho de Madrid",
  "Para Toda la Vida - Tuna Femenina Javeriana",
  "Capricho Andaluz - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
  "Polo margariteño - Tuna Universitaria de la Ciudad de México",
  "Tus ojos - Tuna Universitaria Compostelana",
  "En la Noche Perfumada - Tuna E.T. Peritos Industriales Valencia",
  "La Luna Es una Mujer - Tuna Decana de Madrid",
  "La Tuna Compostelana - Tuna Arquitectura De Madrid",
  "Clavelitos - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
  "Tuna compostelana - Tuna Universitaria Compostelana",
  "Locura Mía - Tuna Javeriana",
  "En Noche Lobrega - La Tuna",
  "Mañana de Carnaval - Tuna Femenina Javeriana",
  "En la Noche Perfumada - Tuna Universitaria De Madrid",
  "El Silbidito - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
  "Carrascosa - Tuna Universitaria De Madrid",
  "Sebastopol - La Tuna",
  "Agua del Pozo - Tuna de Derecho y Económicas de la Universidad de Barcelona",
  "La Uva - Tuna de la Escuela de Peritos Industriales de Madrid",
  "Las cintas de mi capa - Tuna Universitaria Compostelana",
  "El Organillero - Rondalla De La Universidad Potosina",
  "Popurrí Jarocho - Cuarentuna De La Ciudad de México",
  "Naranjitay - Tuna de la Facultad de Farmacia",
  "La Suerte Loca - La Tuna",
  "Alma Corazón y Vida - Los Panchos",
  "Te Quiero - Tuna de Derecho UNAM",
  "¿Por qué? - Tuna Imperial de la FES Iztacala-UNAM",
  "La Aurora - Tuna Decana de Madrid",
  "Ronda de Estrellas - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
  "Deja Que Salga la Luna - Tuna Femenina Javeriana",
  "La Bikina - Tunas Ao Vivo - Vicitu - Certame Internacional De Tunas Universitárias",
  "Fonseca - Tuna Universitaria De Madrid",
  "Triste Y Sola - Tuna de la Facultad de Farmacia",
  "Maracaibo - Tuna Da Universidade Internacional",
  "Pequeña flor de primavera - Tuna Imperial de la FES Iztacala-UNAM",
  "Besame Mucho - Carmen Maureira",
  "Las Cintas de Mi Capa - Tuna de Derecho y Económicas de la Universidad de Barcelona",
  "Cartagena - Tuna de la Facultad de Farmacia",
  "Pico Teide - Tuna Universitaria de la Ciudad de México",
  "Los Gitanos - La Tuna",
  "Fonseca - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
  "Estudiantina Madrileña - Tuna De La Facultad De Farmacia De Madrid",
  "Los Tunos - Tuna de la Facultad de Derecho de Madrid",
  "Fonseca - Tuna Universitaria De Madrid",
  "Despierta - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
  "Las Cintas de Mi Capa - Tuna de la Facultad de Veterinaria de Madrid",
  "Te Traigo Serenata - Estudiantina De La Universidad De Guanajuato",
  "Ronda del Silbidito - La Tuna",
  "Aires Vascos - Estudiantina De La Universidad De Guanajuato",
  "Lágrima - Tuna Universitária do Instituto Superior Técnico",
  "Tuna Compostelana - Tuna de la Facultad de Derecho de Madrid",
  "Que No Se Rompa la Noche - Tuna de Derecho de Sevilla",
  "El Gato Montés - Tuna Femenina Javeriana",
  "Y Viva España - Tuna Universitaria De Madrid",
  "La Flor de la Canela - Tuna Bardos de la Universidad de Puerto Rico",
  "Yo Sin Ti - En Vivo - Segreles",
  "Vagabundo por Sta. Cruz - Tunos de Compostela",
  "Cuando Voy por la Calle - Tuna Femenina Javeriana",
  "Cantinero De Cuba - Tuna de Derecho UNAM",
  "El Bachiller - Estudiantina De La Universidad Autonoma De Queretaro",
  "Flor Sin Retoño - Cuarentuna De La Ciudad de México",
  "Ronda del Silbidito - Tuna Universitaria De Madrid",
  "Adelita - Tuna Universitaria De Madrid",
  "Beber - Tuna Hispanoamericana",
  "Porompompero - 2021 Remastered Version - Tuna Femenil UV",
  "Carnaval del 86 - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
  "Fonseca - Tuna de la Facultad de Derecho de Madrid",
  "La Sirena - La Tuna",
  "Spanish Rumba: Bamboleo - Cantinero De Cuba - Djobí, Djobá - Se Pasaban Los Días - Me Va, Me Va - Mi Guitarra - Color Moreno - Ay Peregrina! - Raya Real",
  "Estudiantina Portuguesa - Tuna de Derecho y Económicas de la Universidad de Barcelona",
  "Tres veces guapa - Tuna Normalista de Puebla",
  "Hoy Estoy Aqui - Tuna de Medicina do Porto",
  "Tipitipitin - Estudiantina De La Universidad Autonoma De Queretaro",
  "Desiderio - Tuna Universitaria De Madrid",
  "No Duermas Niña Adorada - Tuna E.T. Peritos Industriales Valencia",
  "La Tuna Pasa - Tuna Universitaria",
  "La Aurora - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
  "Las Cintas De Mi Capa - Tuna Universitaria",
  "Tuna Compostelana - Remastered - Tuna Universitaria Compostelana",
  "Amalia Rosa - Tuna de Derecho y Económicas de la Universidad de Barcelona",
  "La Luna Y El Toro - Tuna Real",
  "Francisco Alegre [Bonus Track] - Tuna de la E.T.S.E.T.B.",
  "Se Va - Tuna de Derecho y Económicas de la Universidad de Barcelona",
  "Cielito Lindo - La Tuna",
  "Las cintas de mi capa / La morena de mi copla / Estudiantina portuguesa / San Cayetano / El Beso - Remix - Selección de Tunas de Madrid",
  "Tema de Lara - Grupo la Tuna Pasa",
  "El Payador - Tuna Universitaria de Barcelona",
  "Esta Noche No Alumbra - Tuna Universitaria De Madrid",
  "Sabor A Mí - Tuna de la Facultad de Farmacia",
  "Si Vas a Calatayud (El Hijo de la Dolores) - Tuna de la Facultad de Derecho de Madrid",
  "Cantiga - Tuna Universitaria de la Ciudad de México",
  "El Payador - Remastered - Tuna Universitaria Compostelana",
  "Despierta Niña - La Tuna",
  "Guadalajara - Estudiantina De La Universidad Autonoma de Guadalajara",
  "La Melitona - Tuna de la Escuela de Peritos Industriales de Madrid",
  "Popurrí tuna 1 - Tuna De Ingenieros De Montes",
  "Noche Plateada - Estudiantina De La Universidad De Guanajuato",
  "El Pio Pio - Tuna Universitaria",
  "Despierta - Tuna Universitaria De Madrid",
  "Ojos de España - Tuna de Derecho y Económicas de la Universidad de Barcelona",
  "Desiderio - Tuna Universitaria",
  "Cantinero De Cuba - Tuna de la Facultad de Farmacia",
  "Canciones de amor - Tuna Universitaria de la Ciudad de México",
  "Amparito Roca - Tuna Peritos Industriales de Valencia",
  "Clavelitos - Tuna de la Facultad de Farmacia",
  "El Pastor - Cuarentuna De La Ciudad de México",
  "Valencia - La Tuna",
  "Que Nadie Sepa Mi Sufrir - Tuna Universitaria De Madrid",
  "Cuerdas De Mi Guitarra - Estudiantina De La Universidad Autonoma De Queretaro",
  "Termina la Feria - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
  "Despierta - Tuna Universitaria De Madrid",
  "La Maricarmen - Tuna De Barcelona",
  "Angelitos Negros - Rondalla De La Universidad Potosina",
  "Las Cintas de Mi Capa - Tuna Universitaria De Madrid",
  "El Silbidito - Tuna de la Facultad de Derecho de Madrid",
  "Agua del Pozo - Tuna de Derecho y Económicas de la Universidad de Barcelona",
  "Yo Vendo Unos Ojos Negros - Estudiantina De La Universidad Autonoma De Queretaro",
  "Tuna Compostelana - Tuna Universitaria",
  "Alborada - Estudiantina De La Universidad Autonoma De Queretaro",
  "Amapola - Tuna Universitaria",
  "Czardas - Tuna Universitaria de la Ciudad de México",
  "Ojos de España - Remastered - Tuna Universitaria Compostelana",
  "Tus Ojos - Tuna de Derecho UNAM",
  "Viva el Pasodoble - Tuna de la UNED de Úbeda",
  "Novillero - En Vivo - Segreles",
  "Horas de Ronda - Tuna de Derecho y Económicas de la Universidad de Barcelona",
  "Mari Carmen - Tuna Universitaria",
  "Yo vendo unos ojos negros - Tuna Hispanoamericana",
  "Que Nadie Sepa Mi Sufrir - La Tuna de la Facultad de Farmacia",
  "Estudiantina Madrileña - Tuna Universitaria",
  "Isa Canaria - Tuna Decana de Madrid",
  "Zaragoza (Instrumental) - Remastered - Tuna Universitaria Compostelana",
  "Horas De Ronda - Estudiantina De La Universidad De Guanajuato",
  "Esta Noche No Alumbra - Tuna Universitaria De Madrid",
  "Murcia - Tuna Universitaria de la Ciudad de México",
  "Luna de españa - Tuna Universitaria Compostelana",
  "La Tuna Pasa - Tuna Arquitectura De Madrid",
  "La Hiedra - Tuna de Derecho UNAM",
  "Estudiantina Madrileña - Tuna de la Facultad de Derecho de Madrid",
  "Española - Tuna de Derecho de Sevilla",
  "Alma Llanera - En Vivo - Tuna de Derecho de la Universidad de San Martin de Porres",
  "Magdalena - Tuna de Derecho y Económicas de la Universidad de Barcelona",
  "La Bikina - En Vivo - Segreles",
  "Foneseca - Tuna Universitaria Compostelana",
  "Si Vas a Calatayud - Tuna Universitaria",
  "Estudiantina Madrileña - Tuna Universitaria de Granada",
  "Rondador - Tuna de Derecho y Económicas de la Universidad de Barcelona",
  "La Linda Tapada - Tuna de la Facultad de Farmacia",
  "Despierta - Tuna de la Facultad de Veterinaria de Madrid",
  "Española - Tuna de Derecho y Económicas de la Universidad de Barcelona",
  "Granada - Estudiantina De La Universidad De Guanajuato",
  "Triste y Sola - Tuna de Ingenieros de Telecomunicaciones",
  "Clavel Sevillano - Estudiantina De La Universidad De Guanajuato",
  "El Cóndor Pasa - Estudiantina De La Universidad Autonoma De Queretaro",
  "Piel Canela - Tuna Ciudad de Luz",
  "Cuerdas De Mi Guitarra - Estudiantina De La Universidad De Guanajuato",
  "Lagrimas Negras - Tuna Uabjo",
  "Maribel - Tuna Decana de Madrid",
  "Brindis de la Tuna - Tuna de Derecho y Económicas de la Universidad de Barcelona",
  "Cintas De Mi Capa - Tuna de la Facultad de Farmacia",
  "Islas Canarias - Tuna de la Facultad de Farmacia",
  "María La Portuguesa - Tuna Universitaria",
  "En Esta Noche Clara - Tuna de la Facultad de Farmacia",
  "El pájaro chogüi - Tuna de Derecho UNAM",
  "Horas De Ronda - Tuna Universitaria",
  "La Sirena - Tuna de la Escuela de Peritos Industriales de Madrid",
  "Por las Calles de Madrid - Tuna Decana de Madrid",
  "La Morena de Mi Copla - Grupo la Tuna Pasa",
  "La Paloma - La Tuna",
  "Quiéreme - Tuna Femenil UV",
  "Estrellita Del Sur - Tuna de la Facultad de Farmacia",
  "Valencia - Tuna Universitaria",
  "Aliado Del Tiempo - Cuarentuna De La Ciudad de México",
  "Amalia Rosa - Tuna de la Facultad de Farmacia",
  "De colores - Tuna De Aparejadores De Madrid",
  "El Vito - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
  "En Esta Noche Clara - Tuna Universitaria De Madrid",
  "Horas de Ronda - La Tuna",
  "Sueño Imposible - Estudiantina De La Universidad Autonoma De Queretaro",
  "Camino del Santuario - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
  "Cintas De Mi Capa - Tuna de la Facultad de Farmacia",
  "Malagueña - Tuna Universitaria De Madrid",
  "Tuna de España - Tuna Universitaria De Madrid",
  "El Pajaro Chogui - Tuna Vocal",
  "El Beso - Tuna Ciudad de Luz",
  "Rondalla - Tuna de la Facultad de Derecho de Madrid",
  "La Vecina - Tuna Femenina Javeriana",
  "Las Golondrinas - La Tuna",
  "Valencia - Tuna Imperial de la FES Iztacala-UNAM",
  "La Hiedra - Tuna de la UNED de Úbeda",
  "Viaje por España - La Tuna",
  "El Paso - La Tuna",
  "Jota de la Uva - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
  "Pan y Toros - Tuna Decana de Madrid",
  "La Rondalla - Tuna Universitaria De Madrid",
  "En Mi Viejo San Juan - Tuna de Derecho y Económicas de la Universidad de Barcelona",
  "Adelita - Tuna Escuela De Ingenieros Tec. Barcelona",
  "Elsa - Tuna de Derecho y Económicas de la Universidad de Barcelona",
  "Todo canario - Tuna Universitaria de la Ciudad de México",
  "La Copla del Rondador - En Vivo - Tuna de Derecho de la Universidad de San Martin de Porres",
  "El Milagro de Tus Ojos - Tuna Ciudad de Luz",
  "Guantanamera - Tuna de la Facultad de Farmacia",
  "La Estudiantina Pasa - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
  "El Vino Que Tiene Asunción - Tuna Decana de Madrid",
  "Sin Poderte Hablar - Tuna Femenina Javeriana",
  "A Mi Manera - Estudiantina De La Universidad Autonoma De Queretaro",
  "El Parque - Tuna Universitaria",
  "España Cañi - Tuna Decana de Madrid",
  "Si Vas a Calatayud - Tuna Universitaria De La Facultad De Medicina",
  "El Beso - Tuna Decana de Madrid",
  "La Llorona - Estudiantina De La Universidad Autonoma De Queretaro",
  "El cuarto de tula - Tuna Universitaria de la Ciudad de México",
  "Pepita Creus - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
  "Ruedas (Instrumental) - Remastered - Tuna Universitaria Compostelana",
  "La Morena de Mi Copla - Remastered - Tuna Universitaria Compostelana",
  "La Noche Perfumada - Tuna de la Facultad de Derecho de Madrid",
  "Cielito Lindo - Tuna de la Facultad de Farmacia",
  "Que Nadie Sepa Mi Sufrir - Tuna de la Facultad de Farmacia",
  "Santiago (Instrumental) - Remastered - Tuna Universitaria Compostelana",
  "Alturas Fiesta de San Benito - En Vivo - Segreles",
  "Mar y Cielo - Tuna de la UNED de Úbeda",
  "La Aurora - Tuna de la Facultad de Farmacia",
  "Elsa - Tuna de Derecho y Económicas de la Universidad de Barcelona",
  "La Rondalla - La Tuna",
  "Fonseca - Remastered - Tuna Universitaria Compostelana",
  "Estudiantina Andaluza - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
  "El Payador - Tuna Universitaria De Madrid",
  "Maria Dolores - La Tuna",
  "Noche Perfumada - Remastered - Tuna Universitaria Compostelana",
  "Cordobesita - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
  "Palmero Sube a la Palma - Tuna De La Facultad De Farmacia De Madrid",
  "Vuela Una Lágrima - Tuna de Derecho UNAM",
  "Doce Cascabeles - Estudiantina De La Universidad De Guanajuato",
  "El Toro Y La Luna - Tuna de Juglares",
  "Luna de españa - Tuna Universitaria Compostelana",
  "A Mi Me Gusta el Vino - Tuna Universitaria De Madrid",
  "Carrascosa - Tuna Universitaria",
  "La Sirena - Tuna Universitaria De Madrid",
  "Los Ojos de la Española - Tuna Decana de Madrid",
  "San Fermin - Tuna De Barcelona",
  "Rondó A La Turca - Estudiantina De La Universidad De Guanajuato",
  "Melodias - Tuna Universitária do Instituto Superior Técnico",
  "Volver a enamorarte - Tuna Universitaria de la Ciudad de México",
  "Co Co Ro Co - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
  "Mariposita - Tuna de la Facultad de Farmacia",
  "Ronda del Silbidito - Tuna Universitaria De Madrid",
  "Y Viva España - Tuna Universitaria De Madrid",
  "En la Noche Perfumada - Tuna Universitaria De Madrid",
  "Debajo de Tu Ventana - La Tuna",
  "Imágenes de Ayer - Tuna de Masters",
  "Estudiantina en Tu Reja - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
  "Popurri Purón - Tuna Universitaria de la Ciudad de México",
  "El Beso - Tuna de Juglares",
  "Estudiantina Canaria - Tuna Real",
  "Ojos Españoles - Estudiantina De La Universidad De Guanajuato",
  "Carrascosa - La Tuna",
  "Oh Mary - Tuna Universitaria De Madrid",
  "Manolo - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
  "Tuna Compostelana - Tuna de la Escuela de Peritos Industriales de Madrid",
  "La Maricarmen - Tuna De Barcelona",
  "Estudiantina - Tuna de Peritos Industriales de Barcelona",
  "Alma Llanera - Tuna Decana de Madrid",
  "Naranjitay - Tuna de la Facultad de Farmacia",
  "Bendita Mi Tierra Guanche - Tuna de la Facultad de Farmacia",
  "Azul mediterraneo - Tuna Universitaria de la Ciudad de México",
  "Ay Ay Ay - Tuna De La Facultad De Farmacia De Madrid",
  "Rondalla - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
  "Corazón - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
  "Serenata a la Mezquita - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
  "Amalia - Tuna de la Facultad de Farmacia",
  "Clavelitos - Remastered - Tuna Universitaria Compostelana",
  "Si Tú Me Dices Ven - Parrandboleros",
  "Isas Canarias - Tuna de Derecho y Económicas de la Universidad de Barcelona",
  "Corazón contento - Tuna Universitaria de la Ciudad de México",
  "Barrio Brujo - Tuna Universitaria",
  "Clavelitos - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
  "Popurri de Valses - Cuarentuna De La Ciudad de México",
  "Barlovento - En Vivo - Segreles",
  "Amparito Roca (Instrumental) - Remastered - Tuna Universitaria Compostelana",
  "Adios a la Llanera - Los Sabandeños",
  "Granada - Tuna Universitaria",
  "El Trovador - Tuna de la E.T.S.E.T.B.",
  "Pepita Creus - Tuna de la Facultad de Derecho de Madrid",
  "La Sirena - Tuna de la Facultad de Derecho de Madrid",
  "Los Ojos de la Española - Tuna Universitaria De Madrid",
  "La Bikina - Ana Guerra",
  "La Paloma - Tuna Universitaria de Barcelona",
  "La Estudiantina Madrileña - Tuna Arquitectura De Madrid"
];

export const TUNA_SONGS: Song[] = [
  {
    "id": "2aeDmHC8k0xa8WNDGUdtae",
    "href": "https://api.spotify.com/v1/tracks/2aeDmHC8k0xa8WNDGUdtae",
    "name": "Tuna compostelana - Tuna Universitaria Compostelana",
    "preview_url": "https://p.scdn.co/mp3-preview/f29d765fcd0048350603a2c95984afee6d6b6e8d?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851315be364b37cb69e855a16da"
  },
  {
    "id": "0snsP87ZQ4X9NWp1OHTMgb",
    "href": "https://api.spotify.com/v1/tracks/0snsP87ZQ4X9NWp1OHTMgb",
    "name": "Noche Plateada - Estudiantina De La Universidad De Guanajuato",
    "preview_url": "https://p.scdn.co/mp3-preview/c376cac43027a5df01f57220c558cf878d122c96?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048510d5b3927fa55ac2197782795"
  },
  {
    "id": "7AK6v6y7GNdWB07iFxynLs",
    "href": "https://api.spotify.com/v1/tracks/7AK6v6y7GNdWB07iFxynLs",
    "name": "Corazón contento - Tuna Universitaria de la Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/f55e3c9d5fd7135dbee06a78044cdd7536717d43?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851dcb6b9bf403899a60f116122"
  },
  {
    "id": "6C9Piihe1w0NafNwX9RBxL",
    "href": "https://api.spotify.com/v1/tracks/6C9Piihe1w0NafNwX9RBxL",
    "name": "Amor de Mis Amores - Tuna de la Facultad de Veterinaria de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/07ccfb5f3fe4509f4c5bd70edaf8a53602e7fb7f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851eafba6bec870e98ad8eb547f"
  },
  {
    "id": "1lsjJn6kQmgEoC6BzW8R4E",
    "href": "https://api.spotify.com/v1/tracks/1lsjJn6kQmgEoC6BzW8R4E",
    "name": "La Luna Y El Toro - Tuna Real",
    "preview_url": "https://p.scdn.co/mp3-preview/fecbf8d6d9b3e72f9a2b9f8cf0c240d48659e966?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485108fddaf14341095796f36eb8"
  },
  {
    "id": "0MRqHCIKOdLFanOqK6P8qT",
    "href": "https://api.spotify.com/v1/tracks/0MRqHCIKOdLFanOqK6P8qT",
    "name": "Las Cintas de Mi Capa - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/f934f367cc49904630c92389b10d1b024c78cbff?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485109ef3003c348e13cef047805"
  },
  {
    "id": "1MHvDfOTO88Fap3bzuCCCF",
    "href": "https://api.spotify.com/v1/tracks/1MHvDfOTO88Fap3bzuCCCF",
    "name": "La Copla del Rondador - En Vivo - Tuna de Derecho de la Universidad de San Martin de Porres",
    "preview_url": "https://p.scdn.co/mp3-preview/a84e575cc1729e6e52acf093d9aaa8e5036d7a83?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851c66ac4666e97e585d8c2b86d"
  },
  {
    "id": "4klDhvn3FIJ7ZX8dcPlb7E",
    "href": "https://api.spotify.com/v1/tracks/4klDhvn3FIJ7ZX8dcPlb7E",
    "name": "La morena de mi copla - Tuna Universitaria De Valencia",
    "preview_url": "https://p.scdn.co/mp3-preview/0c35a625cccef2560b019896de5fb213a5952a5b?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514fd525d60ae7b764ab5b926c"
  },
  {
    "id": "2O6M8zp5amYEZZoj2YBKBx",
    "href": "https://api.spotify.com/v1/tracks/2O6M8zp5amYEZZoj2YBKBx",
    "name": "Todo canario - Tuna Universitaria de la Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/d7bafd445ad66b1b02b75ea474df5703cedd87d2?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851dcb6b9bf403899a60f116122"
  },
  {
    "id": "3YNgW7j8Orp8MJ5UrOohVf",
    "href": "https://api.spotify.com/v1/tracks/3YNgW7j8Orp8MJ5UrOohVf",
    "name": "Ronda de estrellas - Tuna Universitaria De Córdoba",
    "preview_url": "https://p.scdn.co/mp3-preview/9aff3f9dce1c50352c80cd66ab744f4fcf304959?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514fd525d60ae7b764ab5b926c"
  },
  {
    "id": "6KFdkM3TbwNmWeHp6VrdLQ",
    "href": "https://api.spotify.com/v1/tracks/6KFdkM3TbwNmWeHp6VrdLQ",
    "name": "En Esta Noche Clara - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/5303bdd16d13a6318a5b65f3c8aa86ea9f9f7215?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851c278b020d889e1b750452f23"
  },
  {
    "id": "49WXa71fCZPVFIYCK68lft",
    "href": "https://api.spotify.com/v1/tracks/49WXa71fCZPVFIYCK68lft",
    "name": "Porompompero - 2021 Remastered Version - Tuna Femenil UV",
    "preview_url": "https://p.scdn.co/mp3-preview/9b669c2a77689f901309ac3012ac11b66b3a53b1?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851756cc79aed9c45e6e2a5059f"
  },
  {
    "id": "1PtJOYlMqSSGL2VZJ1ulAh",
    "href": "https://api.spotify.com/v1/tracks/1PtJOYlMqSSGL2VZJ1ulAh",
    "name": "El Payador - Tuna de la Facultad de Derecho de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/42803ca34cc1519f67f8cfb3af5cab38b6a1a2aa?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851081396d462015e7bce0d894f"
  },
  {
    "id": "61ZsIhgeta8pJvqkzLZ7V7",
    "href": "https://api.spotify.com/v1/tracks/61ZsIhgeta8pJvqkzLZ7V7",
    "name": "La Tuna Pasa - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/e65d0de1fcde89dcb0da4ab23228e2e8047f97ef?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851a1e470c40617cca00272e453"
  },
  {
    "id": "6QI3Z4jelGgAfeHmFA8PKf",
    "href": "https://api.spotify.com/v1/tracks/6QI3Z4jelGgAfeHmFA8PKf",
    "name": "Fonseca - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/682009c3570a8e4ede491fe68a1331e27d3afba8?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048512c55854a922df4cd10f05d50"
  },
  {
    "id": "5oInJ9M3Upvy74hdNjeQF2",
    "href": "https://api.spotify.com/v1/tracks/5oInJ9M3Upvy74hdNjeQF2",
    "name": "A Mi Manera - Estudiantina De La Universidad Autonoma De Queretaro",
    "preview_url": "https://p.scdn.co/mp3-preview/5c1ceb14c94c89730fc3b63fe2cd287ad4d3ac28?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851db4ecc7f1dfae76e6582ae58"
  },
  {
    "id": "1qzXMlkOqav9WE3ItLTGj8",
    "href": "https://api.spotify.com/v1/tracks/1qzXMlkOqav9WE3ItLTGj8",
    "name": "Popurrí Jarocho - Cuarentuna De La Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/1c109f648b8767609d35393fa0b17dc0e50b9a7f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851f1e994735aaf70b5216dfca0"
  },
  {
    "id": "4gdEJW9Q7Q5bnkdU7gaKVG",
    "href": "https://api.spotify.com/v1/tracks/4gdEJW9Q7Q5bnkdU7gaKVG",
    "name": "Cuando Voy por la Calle - Tuna Femenina Javeriana",
    "preview_url": "https://p.scdn.co/mp3-preview/409852d8fba90538836bb0d8b5ccb5d61115e71f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485134f86d152476a839a4235b91"
  },
  {
    "id": "22MnF2wCssAJ4V6DqsrkSs",
    "href": "https://api.spotify.com/v1/tracks/22MnF2wCssAJ4V6DqsrkSs",
    "name": "Noche Perfumada - Remastered - Tuna Universitaria Compostelana",
    "preview_url": "https://p.scdn.co/mp3-preview/3968d932263e41ab4b098bcb9ee166d0dbd74a5a?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e0d53ee6b1bbb594abd3654f"
  },
  {
    "id": "27H9tQDiQHtCUKPlkpLEeT",
    "href": "https://api.spotify.com/v1/tracks/27H9tQDiQHtCUKPlkpLEeT",
    "name": "Las cintas de mi capa - Tuna Universitaria Compostelana",
    "preview_url": "https://p.scdn.co/mp3-preview/ebd86024f12a59377a991e2b287f8cdcc4996a47?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851315be364b37cb69e855a16da"
  },
  {
    "id": "4zBsP9nIpDwWg5q6uOLpEe",
    "href": "https://api.spotify.com/v1/tracks/4zBsP9nIpDwWg5q6uOLpEe",
    "name": "Ronda del Silbidito - La Tuna",
    "preview_url": "https://p.scdn.co/mp3-preview/b6fedd7ccbad3dfb80c35ba68a57c3e0ea16493f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ddbd571f00b1cc413f80d369"
  },
  {
    "id": "4mHQcPG7RgDUpHVTIEhqiV",
    "href": "https://api.spotify.com/v1/tracks/4mHQcPG7RgDUpHVTIEhqiV",
    "name": "Azul mediterraneo - Tuna Universitaria de la Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/5bc3f608c045e099d3568c8683eb9d2bee85717b?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851dcb6b9bf403899a60f116122"
  },
  {
    "id": "28v4eb57segBGveAoobKLT",
    "href": "https://api.spotify.com/v1/tracks/28v4eb57segBGveAoobKLT",
    "name": "Horas De Ronda - Estudiantina De La Universidad De Guanajuato",
    "preview_url": "https://p.scdn.co/mp3-preview/6c5a70b1bd23863a325c4a52cfcb9b885405b3f9?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048510d5b3927fa55ac2197782795"
  },
  {
    "id": "5HcEGd4TSnhMyj1h8gTKDA",
    "href": "https://api.spotify.com/v1/tracks/5HcEGd4TSnhMyj1h8gTKDA",
    "name": "El Beso - Tuna Decana de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/469ae76af79f73fd4b40fcf81d0e35a21a40f9cb?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851fd1df2ee90c0d4720dcca380"
  },
  {
    "id": "6Wg480nwZkCmCNdmfPx5SS",
    "href": "https://api.spotify.com/v1/tracks/6Wg480nwZkCmCNdmfPx5SS",
    "name": "El pájaro chogüi - Tuna de Derecho UNAM",
    "preview_url": "https://p.scdn.co/mp3-preview/0a9237e1e4120341bd1a830bb140f4e15eb689b6?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048516aa724154300c9ef3ce3de12"
  },
  {
    "id": "3stzaatK5O4gfoxvabTyUx",
    "href": "https://api.spotify.com/v1/tracks/3stzaatK5O4gfoxvabTyUx",
    "name": "Maria Dolores - La Tuna",
    "preview_url": "https://p.scdn.co/mp3-preview/b3dae6f3a61c4a7b15daacde9d778322d6818369?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ddbd571f00b1cc413f80d369"
  },
  {
    "id": "0hSvvrSnjt7fhuEFmX84VI",
    "href": "https://api.spotify.com/v1/tracks/0hSvvrSnjt7fhuEFmX84VI",
    "name": "Que Nadie Sepa Mi Sufrir - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/28cd6594e52a05555bbf6733f7670410933f5b9c?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048512c55854a922df4cd10f05d50"
  },
  {
    "id": "4LcwuKzjtgrvMA1FBsjhso",
    "href": "https://api.spotify.com/v1/tracks/4LcwuKzjtgrvMA1FBsjhso",
    "name": "Camino del Santuario - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
    "preview_url": "https://p.scdn.co/mp3-preview/905bb9df5388fb84abc830d5485952cdcfbbd1ae?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514788624142222491d13fc531"
  },
  {
    "id": "6xn0EpJuzeJKv8sDYoPJvp",
    "href": "https://api.spotify.com/v1/tracks/6xn0EpJuzeJKv8sDYoPJvp",
    "name": "Cintas de Mi Capa - La Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/dc181bac98a29d9a46d99621d140d8ca46df2ca2?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851762de4c6c4ba2e9ef01a263d"
  },
  {
    "id": "73W57L2rYhDiqU87OIq5bo",
    "href": "https://api.spotify.com/v1/tracks/73W57L2rYhDiqU87OIq5bo",
    "name": "Piel Canela - Tuna Ciudad de Luz",
    "preview_url": "https://p.scdn.co/mp3-preview/116cde110eeb41ee231f03519d62de6ca92059b2?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ca67be0119fc987dc43af95c"
  },
  {
    "id": "2bYLlcY6nOgvtSLFYgvTgK",
    "href": "https://api.spotify.com/v1/tracks/2bYLlcY6nOgvtSLFYgvTgK",
    "name": "Cinco Letras Nada Más - Tuna de la Facultad de Veterinaria de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/942f81c401ef081b6d4483caadc7d2438fd17cd1?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851eafba6bec870e98ad8eb547f"
  },
  {
    "id": "2D44ueBrI6C4ebCgw967Lu",
    "href": "https://api.spotify.com/v1/tracks/2D44ueBrI6C4ebCgw967Lu",
    "name": "Alfonsina y el mar - Tuna Universitaria Compostelana",
    "preview_url": "https://p.scdn.co/mp3-preview/48dab54094a32c294c07e663350ede38dc8441cd?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851315be364b37cb69e855a16da"
  },
  {
    "id": "38AYpURkIiHPfj9GZIU32X",
    "href": "https://api.spotify.com/v1/tracks/38AYpURkIiHPfj9GZIU32X",
    "name": "Las cintas de mi capa / La morena de mi copla / Estudiantina portuguesa / San Cayetano / El Beso - Remix - Selección de Tunas de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/3e4d60855afcaa984e39ffe50a4517a0ce8e4bc3?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851189d3f6eb16a8d78075ac0b8"
  },
  {
    "id": "3i1ihOrbXoRH2RYYLq026B",
    "href": "https://api.spotify.com/v1/tracks/3i1ihOrbXoRH2RYYLq026B",
    "name": "En Mi Viejo San Juan - Tuna de Derecho y Económicas de la Universidad de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/c73f69b5ba66d22cd8c94ab8026a54efe34dee94?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851a7809d9d9f3c0f514f371329"
  },
  {
    "id": "1IVRFbUj6K0r7ILQns7eTH",
    "href": "https://api.spotify.com/v1/tracks/1IVRFbUj6K0r7ILQns7eTH",
    "name": "La Bikina - Ana Guerra",
    "preview_url": "https://p.scdn.co/mp3-preview/41b762cb3eb58289eb364a3f1686cf4d552e1a70?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048517d11b8caff5617a54faec3e6"
  },
  {
    "id": "3Yr251rMJRR6DWogbkdr83",
    "href": "https://api.spotify.com/v1/tracks/3Yr251rMJRR6DWogbkdr83",
    "name": "Bella Ciao - Estudiantina De La Universidad Autonoma De Queretaro",
    "preview_url": "https://p.scdn.co/mp3-preview/3f5a5e8e18c25be8115d398e9f5e2a188eb6297e?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048516cb308fb5496f74c0fac525f"
  },
  {
    "id": "5QWCtjqQRzDJhWRzZACFVe",
    "href": "https://api.spotify.com/v1/tracks/5QWCtjqQRzDJhWRzZACFVe",
    "name": "Novillero - En Vivo - Segreles",
    "preview_url": "https://p.scdn.co/mp3-preview/74d284bcfd503562e99167d84a1890bf9664e98c?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851544acbc828ebb4976ec74833"
  },
  {
    "id": "6dnZS8A8CMqOiDxje7zHw3",
    "href": "https://api.spotify.com/v1/tracks/6dnZS8A8CMqOiDxje7zHw3",
    "name": "Triste Y Sola - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/0366bcfbf46d24c3801c363a89d5c10b0d8ee689?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "74anm9S2FkrPrxOosSp2eJ",
    "href": "https://api.spotify.com/v1/tracks/74anm9S2FkrPrxOosSp2eJ",
    "name": "La Rondalla - La Tuna",
    "preview_url": "https://p.scdn.co/mp3-preview/0a9e609cb341358b7448efdc9a17bddd57244443?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048516011e84c836653e8bd5eed22"
  },
  {
    "id": "1XjplRfeIGpcLfKYg1eQjM",
    "href": "https://api.spotify.com/v1/tracks/1XjplRfeIGpcLfKYg1eQjM",
    "name": "Popurri Purón - Tuna Universitaria de la Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/e7db74662d16314113cadb19826a448b120b7191?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ab714fe637b44e432e71011c"
  },
  {
    "id": "46Vxcl4oKufSUToyWGzVXl",
    "href": "https://api.spotify.com/v1/tracks/46Vxcl4oKufSUToyWGzVXl",
    "name": "Besame Mucho - Carmen Maureira",
    "preview_url": "https://p.scdn.co/mp3-preview/482b68a973145367bea7e4a5d4d21c65e52363a6?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ce1bb7d1ac89f6dbf220f4dc"
  },
  {
    "id": "2DAR48t3KgTsbtEIOZ53Q2",
    "href": "https://api.spotify.com/v1/tracks/2DAR48t3KgTsbtEIOZ53Q2",
    "name": "Naranjitay - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/f523605b19ca6a63926595b31e5f9b24aa927ea2?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "2CG1KmQAROXHsTMjwArBNq",
    "href": "https://api.spotify.com/v1/tracks/2CG1KmQAROXHsTMjwArBNq",
    "name": "El Triste - Tuna de Derecho UNAM",
    "preview_url": "https://p.scdn.co/mp3-preview/1835b815c1277fad57f9c6e55125d9129f2bc252?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048513350eac6ec6593be84b0f86d"
  },
  {
    "id": "292cctW7rYuXolimugNEMT",
    "href": "https://api.spotify.com/v1/tracks/292cctW7rYuXolimugNEMT",
    "name": "Ojos de España - Tuna de Derecho y Económicas de la Universidad de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/0db6296fd119aa44084392e346f5b52471418ea7?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851a7809d9d9f3c0f514f371329"
  },
  {
    "id": "2gA9FJIXKCZPq8GVFL5WJs",
    "href": "https://api.spotify.com/v1/tracks/2gA9FJIXKCZPq8GVFL5WJs",
    "name": "Palmero Sube a la Palma - Tuna De La Facultad De Farmacia De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/1ebad32e09e56398df153ed408aad0172e300c1b?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485161922ee727694cce709368b3"
  },
  {
    "id": "0FuGMbWCa7ZYn5a3oS5RNF",
    "href": "https://api.spotify.com/v1/tracks/0FuGMbWCa7ZYn5a3oS5RNF",
    "name": "Esta Noche No Alumbra - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/b51eda91a8597af2d2ef05812eed2c455b83e72b?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048511ed24d40761b9caaae5ac576"
  },
  {
    "id": "0AoFSB4bwCb28ofQQT4rHs",
    "href": "https://api.spotify.com/v1/tracks/0AoFSB4bwCb28ofQQT4rHs",
    "name": "Estudiantina Madrileña - Tuna De La Facultad De Farmacia De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/ee3e871755a8b34453698853f1c1b616866ef4d8?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e00a5a0f598ebcb456335968"
  },
  {
    "id": "6DGUBNvuFhZlSHSxS1QCTj",
    "href": "https://api.spotify.com/v1/tracks/6DGUBNvuFhZlSHSxS1QCTj",
    "name": "El Payador - Tuna de la Facultad de Veterinaria de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/fb5ded8dfd876e232d47e71a3fcc37a97ba59036?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851eafba6bec870e98ad8eb547f"
  },
  {
    "id": "7En66Zsd4qxhqTZrryRKQs",
    "href": "https://api.spotify.com/v1/tracks/7En66Zsd4qxhqTZrryRKQs",
    "name": "Silencio - Tuna Universitaria Compostelana",
    "preview_url": "https://p.scdn.co/mp3-preview/514e816b0168527a6a6d89f9f1bc81d99f7658c6?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851315be364b37cb69e855a16da"
  },
  {
    "id": "7oI6oXueeLMQYyReHX899h",
    "href": "https://api.spotify.com/v1/tracks/7oI6oXueeLMQYyReHX899h",
    "name": "Tuna Compostelana - Tuna Universitaria",
    "preview_url": "https://p.scdn.co/mp3-preview/dcdfa4270cab6b71dca51f5b38e4fdd1e53ba1f5?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851b972cdf46e7c2a0c64bc118e"
  },
  {
    "id": "3ntJMhk8w8qP8CgHnyJsPf",
    "href": "https://api.spotify.com/v1/tracks/3ntJMhk8w8qP8CgHnyJsPf",
    "name": "Clavel Sevillano - Estudiantina De La Universidad De Guanajuato",
    "preview_url": "https://p.scdn.co/mp3-preview/44af328868ed777d75717d0e8e2b809ed5ef5dc6?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048515ce388d6c1223c5100161aa4"
  },
  {
    "id": "7o33LRfh0uoGVyBciaxZMq",
    "href": "https://api.spotify.com/v1/tracks/7o33LRfh0uoGVyBciaxZMq",
    "name": "Clavelitos - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
    "preview_url": "https://p.scdn.co/mp3-preview/a676088368ca9d34cb24ec445c09afe60c163222?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514788624142222491d13fc531"
  },
  {
    "id": "4zvkBTzaStXyJSpaMAYhKJ",
    "href": "https://api.spotify.com/v1/tracks/4zvkBTzaStXyJSpaMAYhKJ",
    "name": "Estudiantina Andaluza - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
    "preview_url": "https://p.scdn.co/mp3-preview/ceb8e8560bfd623b0d35db8639d2c8d5a1644305?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514788624142222491d13fc531"
  },
  {
    "id": "4lgeb2HgpKy2c1x75EmrYS",
    "href": "https://api.spotify.com/v1/tracks/4lgeb2HgpKy2c1x75EmrYS",
    "name": "Estudiantina en Tu Reja - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
    "preview_url": "https://p.scdn.co/mp3-preview/cb78646d947706027eb25e73bab14fe77d446846?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514788624142222491d13fc531"
  },
  {
    "id": "17xCYFbevz3qW20YTIQzSn",
    "href": "https://api.spotify.com/v1/tracks/17xCYFbevz3qW20YTIQzSn",
    "name": "Elsa - Tuna de Derecho y Económicas de la Universidad de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/77738ba8a3c84fab420594a9d6fb8d74a5600dd0?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851a7809d9d9f3c0f514f371329"
  },
  {
    "id": "15bmkIM1y9S5VCIhaTWKsT",
    "href": "https://api.spotify.com/v1/tracks/15bmkIM1y9S5VCIhaTWKsT",
    "name": "Francisco Alegre [Bonus Track] - Tuna de la E.T.S.E.T.B.",
    "preview_url": "https://p.scdn.co/mp3-preview/2ecf5482edc3fb935a4cf04cca78c43dd03023b9?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851a07236e56e3ed2a7f843866c"
  },
  {
    "id": "6mv9aZP0mhuB2ZzovLINZn",
    "href": "https://api.spotify.com/v1/tracks/6mv9aZP0mhuB2ZzovLINZn",
    "name": "¿Por qué? - Tuna Imperial de la FES Iztacala-UNAM",
    "preview_url": "https://p.scdn.co/mp3-preview/e4e3027b271d4c64130a830e2bd64287cd294116?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851d60dc6e3c567581c22cc90da"
  },
  {
    "id": "4pRxscRBrd22rM2AfI0g93",
    "href": "https://api.spotify.com/v1/tracks/4pRxscRBrd22rM2AfI0g93",
    "name": "Serenata a la Mezquita - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
    "preview_url": "https://p.scdn.co/mp3-preview/7828bf4b0038cbbdb39483ebe2a83c7c92bf598f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514788624142222491d13fc531"
  },
  {
    "id": "6BpQR0gf5DlwWY7Quh31Q2",
    "href": "https://api.spotify.com/v1/tracks/6BpQR0gf5DlwWY7Quh31Q2",
    "name": "Desiderio - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/38bc7c288ca05a151f1ffb449502fbfae47753cf?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048518612018ad3e978eade553fa9"
  },
  {
    "id": "6bDOCMJ0hKLXYXw8JhY5kY",
    "href": "https://api.spotify.com/v1/tracks/6bDOCMJ0hKLXYXw8JhY5kY",
    "name": "Y Viva España - Tuna Universitaria",
    "preview_url": "https://p.scdn.co/mp3-preview/67a7f076357c6a082d27c9f478990a588bbcc88a?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851b972cdf46e7c2a0c64bc118e"
  },
  {
    "id": "1jQNDiSWiEDos8qGdRH635",
    "href": "https://api.spotify.com/v1/tracks/1jQNDiSWiEDos8qGdRH635",
    "name": "La Rondalla - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/6ea756ef8eff3905fec5d5d15890e2a64635a0e1?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048511ed24d40761b9caaae5ac576"
  },
  {
    "id": "2ciOXwA3Q1xsaMhnY4E8Ot",
    "href": "https://api.spotify.com/v1/tracks/2ciOXwA3Q1xsaMhnY4E8Ot",
    "name": "Quiéreme - Tuna Femenil UV",
    "preview_url": "https://p.scdn.co/mp3-preview/47eafb1f6e252845c35abbc702d42b8b130fb786?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485174c2f0c9d12bade30322282e"
  },
  {
    "id": "0Y6HDAirmQwruIPNiuik1l",
    "href": "https://api.spotify.com/v1/tracks/0Y6HDAirmQwruIPNiuik1l",
    "name": "Carrascosa - La Tuna",
    "preview_url": "https://p.scdn.co/mp3-preview/550359085c449796a8181b864f7ec3d832dc478c?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ddbd571f00b1cc413f80d369"
  },
  {
    "id": "6Duigv67zONf1IgVdetDHY",
    "href": "https://api.spotify.com/v1/tracks/6Duigv67zONf1IgVdetDHY",
    "name": "Despierta Carolina - Tuna de la Escuela de Peritos Industriales de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/56f6da89b8d944c8cb8f6391645feb29bae93a5d?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851eafba6bec870e98ad8eb547f"
  },
  {
    "id": "4mby007RgpSYu5ndxs8Lyt",
    "href": "https://api.spotify.com/v1/tracks/4mby007RgpSYu5ndxs8Lyt",
    "name": "Spanish Rumba: Bamboleo - Cantinero De Cuba - Djobí, Djobá - Se Pasaban Los Días - Me Va, Me Va - Mi Guitarra - Color Moreno - Ay Peregrina! - Raya Real",
    "preview_url": "https://p.scdn.co/mp3-preview/80551856ad3562167a96f4acb4df5064a4029157?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851a298bd8e8f9203d8f4a7e303"
  },
  {
    "id": "15uYr0ErwTftC25ud0hlxq",
    "href": "https://api.spotify.com/v1/tracks/15uYr0ErwTftC25ud0hlxq",
    "name": "Lágrima - Tuna Universitária do Instituto Superior Técnico",
    "preview_url": "https://p.scdn.co/mp3-preview/f499fc91c51098db3172afa7d0f20ab9b8ade27f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851517c7207df6ae58b2759205d"
  },
  {
    "id": "76x3K0I6i24B2FIoN5wbWp",
    "href": "https://api.spotify.com/v1/tracks/76x3K0I6i24B2FIoN5wbWp",
    "name": "Y Viva España - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/d4825a93b5c95ffed151c474adfa20f6b5f4b2f5?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851dd52294d3ed4df81daeccbf2"
  },
  {
    "id": "4wMSA3AKBirq7oUOOj6D6K",
    "href": "https://api.spotify.com/v1/tracks/4wMSA3AKBirq7oUOOj6D6K",
    "name": "Mariposita - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/dc9480afe0a5707849dcc5221f70ee077b9c4e2f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "0Uwl3NqE1Qhqv9P0Qpz7Aw",
    "href": "https://api.spotify.com/v1/tracks/0Uwl3NqE1Qhqv9P0Qpz7Aw",
    "name": "Granada - Estudiantina De La Universidad De Guanajuato",
    "preview_url": "https://p.scdn.co/mp3-preview/d23fc1044beb3073922671556d31fde12eac3276?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048515ce388d6c1223c5100161aa4"
  },
  {
    "id": "1D69x8yTYs6op1mYMtwRWa",
    "href": "https://api.spotify.com/v1/tracks/1D69x8yTYs6op1mYMtwRWa",
    "name": "Luna de españa - Tuna Universitaria Compostelana",
    "preview_url": "https://p.scdn.co/mp3-preview/dc715d17b757b1fcd1b40fa95b7b57cccc3f6ded?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851315be364b37cb69e855a16da"
  },
  {
    "id": "1R03KqmPAiWEi8SvNT56yU",
    "href": "https://api.spotify.com/v1/tracks/1R03KqmPAiWEi8SvNT56yU",
    "name": "Canción Mixteca - Estudiantina De La Universidad Autonoma de Guadalajara",
    "preview_url": "https://p.scdn.co/mp3-preview/d4161cca6202e2eb8e483de43f5950ccde200a39?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514fdef931650215a0699b0fab"
  },
  {
    "id": "6os5IzZqW9VdpkmQdyKQpN",
    "href": "https://api.spotify.com/v1/tracks/6os5IzZqW9VdpkmQdyKQpN",
    "name": "Pan y Toros - Tuna Decana de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/a480409e9ff09f3d7c3797dbb4cdf624d88bd37b?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485120547e7e32c24dbb2a0af5bb"
  },
  {
    "id": "0FQ2z6HDTTpE3AnhhYpFxl",
    "href": "https://api.spotify.com/v1/tracks/0FQ2z6HDTTpE3AnhhYpFxl",
    "name": "La Morena de Mi Copla - Grupo la Tuna Pasa",
    "preview_url": "https://p.scdn.co/mp3-preview/cc1db18b2a5545f6e1861520d66b528bdca5e8cd?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851b8777a642797f31e092fcb5f"
  },
  {
    "id": "2c98G1Io0SmLmmm07qxkXP",
    "href": "https://api.spotify.com/v1/tracks/2c98G1Io0SmLmmm07qxkXP",
    "name": "El Rey - Estudiantina De La Universidad Autonoma De Queretaro",
    "preview_url": "https://p.scdn.co/mp3-preview/106d39e19fcae11d355b3a4437fa3a9c7540902d?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851db4ecc7f1dfae76e6582ae58"
  },
  {
    "id": "1fL1TJWi0JmueJZmUMj86Q",
    "href": "https://api.spotify.com/v1/tracks/1fL1TJWi0JmueJZmUMj86Q",
    "name": "Las Palmeras - Tuna Universitaria de la Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/6631c4a1e9006d35d722c2bee27f19ab88594cc2?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851dcb6b9bf403899a60f116122"
  },
  {
    "id": "5NIyomSh5WDwMGDO75XZ95",
    "href": "https://api.spotify.com/v1/tracks/5NIyomSh5WDwMGDO75XZ95",
    "name": "Co Co Ro Co - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/8761a645e05e45e61cba1a476a4d0c382764e2c9?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048511d90e05a28262fccff22c97b"
  },
  {
    "id": "3xqjbwNPYapsX6THZxr5k1",
    "href": "https://api.spotify.com/v1/tracks/3xqjbwNPYapsX6THZxr5k1",
    "name": "Cielito Lindo - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/f2656704a5d5a2b08e63403b2c5e82e5ce863989?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "0X8Qx6AxE95uyilXluot0O",
    "href": "https://api.spotify.com/v1/tracks/0X8Qx6AxE95uyilXluot0O",
    "name": "El Pio Pio - Tuna Universitaria",
    "preview_url": "https://p.scdn.co/mp3-preview/d2f18a9234427384b7d565828ceb194d49d48cf2?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485161af7fb29b6fb862a7daa6cb"
  },
  {
    "id": "45mCax53V4ENXQTu5VGznx",
    "href": "https://api.spotify.com/v1/tracks/45mCax53V4ENXQTu5VGznx",
    "name": "Que No Se Rompa la Noche - Tuna de Derecho de Sevilla",
    "preview_url": "https://p.scdn.co/mp3-preview/54f2423e2bf170ddd1851a0165f914b29948ae75?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048513b83625e9176675b0ed3c1f3"
  },
  {
    "id": "30qfys0SNNFTGAii7fG7QX",
    "href": "https://api.spotify.com/v1/tracks/30qfys0SNNFTGAii7fG7QX",
    "name": "Corazón - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/8c0ed453f3fd3aa7c7d372fcfdda1877640deb3c?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048511d90e05a28262fccff22c97b"
  },
  {
    "id": "5O9hdiXu5kPfFo3wFjGB6Q",
    "href": "https://api.spotify.com/v1/tracks/5O9hdiXu5kPfFo3wFjGB6Q",
    "name": "Fonseca - Remastered - Tuna Universitaria Compostelana",
    "preview_url": "https://p.scdn.co/mp3-preview/837a65893455b24e075ef9fc09425d7e99e11870?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e0d53ee6b1bbb594abd3654f"
  },
  {
    "id": "5OgZyPYC6jdR97HCph0zsJ",
    "href": "https://api.spotify.com/v1/tracks/5OgZyPYC6jdR97HCph0zsJ",
    "name": "En la Noche Perfumada - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/1f0d98e89fd6136041fbce0b0a8361918d226c3c?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048511ed24d40761b9caaae5ac576"
  },
  {
    "id": "2gNZ9yVg9z6tfugvhFu3x3",
    "href": "https://api.spotify.com/v1/tracks/2gNZ9yVg9z6tfugvhFu3x3",
    "name": "Los Ojos de la Española - Tuna Decana de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/d1abb61d6ffc3fa5c830ab41dc6b5faa4d3ef109?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485120547e7e32c24dbb2a0af5bb"
  },
  {
    "id": "1ZqRyjGV0mmO07Db4fq5QS",
    "href": "https://api.spotify.com/v1/tracks/1ZqRyjGV0mmO07Db4fq5QS",
    "name": "El Pajaro Chogui - Tuna Vocal",
    "preview_url": "https://p.scdn.co/mp3-preview/43d2359a62ea397603df2cd2c4e7a28c88d71314?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851688900e109f32b5873976655"
  },
  {
    "id": "6t7sXsV0kRPYMYVZkK8S12",
    "href": "https://api.spotify.com/v1/tracks/6t7sXsV0kRPYMYVZkK8S12",
    "name": "La Morena De Mi Copla - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/e47533816a4c4dfdfd9fedb79cadc153439a4e97?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "5e3qkugWF3j8PNkFYP8uDR",
    "href": "https://api.spotify.com/v1/tracks/5e3qkugWF3j8PNkFYP8uDR",
    "name": "Si Vas a Calatayud - Tuna Universitaria",
    "preview_url": "https://p.scdn.co/mp3-preview/08e4d2c1495b5d11762c6d75b007dde870b274a9?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851b972cdf46e7c2a0c64bc118e"
  },
  {
    "id": "02yVGjZvFW8wBucnf9DZg1",
    "href": "https://api.spotify.com/v1/tracks/02yVGjZvFW8wBucnf9DZg1",
    "name": "El Pastor - Cuarentuna De La Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/db3ca28320786b0afd171f25b23f3a82bed73705?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851f1e994735aaf70b5216dfca0"
  },
  {
    "id": "06km9630G1xEVStT99vaW8",
    "href": "https://api.spotify.com/v1/tracks/06km9630G1xEVStT99vaW8",
    "name": "La Paloma - Tuna Universitaria de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/065a2ac5b84b3df6c7b0a85df73565f77d79dfb0?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851885ef7e0c758aa7a366796b7"
  },
  {
    "id": "4DT5tvNbwPob8But1zztjR",
    "href": "https://api.spotify.com/v1/tracks/4DT5tvNbwPob8But1zztjR",
    "name": "Tuna Compostelana - Tuna de la Facultad de Derecho de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/383de6dc5f122d1b5fa3a9892c359f8f30380896?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851081396d462015e7bce0d894f"
  },
  {
    "id": "0Jz2dGoWRkjEZi2vBLiNsZ",
    "href": "https://api.spotify.com/v1/tracks/0Jz2dGoWRkjEZi2vBLiNsZ",
    "name": "El Vino Que Tiene Asunción - Tuna Decana de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/36a3abec45e54f39d3ead694f319605d5f6f7227?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851fd1df2ee90c0d4720dcca380"
  },
  {
    "id": "7tcJSMXC1wEzKMEuBt51FL",
    "href": "https://api.spotify.com/v1/tracks/7tcJSMXC1wEzKMEuBt51FL",
    "name": "El Silbidito - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/f0728fe55cf6695ea9a41242327bc1daa5e9ac48?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048511d90e05a28262fccff22c97b"
  },
  {
    "id": "0U66jBari4UFmIaPeqL3Ya",
    "href": "https://api.spotify.com/v1/tracks/0U66jBari4UFmIaPeqL3Ya",
    "name": "Española - Tuna de Derecho de Sevilla",
    "preview_url": "https://p.scdn.co/mp3-preview/ab7a88ddd67608f9f39615927f7593d713c9974f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048513b83625e9176675b0ed3c1f3"
  },
  {
    "id": "4nGVR6eZ3Q2B1YtcAV1MzT",
    "href": "https://api.spotify.com/v1/tracks/4nGVR6eZ3Q2B1YtcAV1MzT",
    "name": "Rondó A La Turca - Estudiantina De La Universidad De Guanajuato",
    "preview_url": "https://p.scdn.co/mp3-preview/3e5e7f52373374adc9ec8c8013e2fa4994a63710?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048515ce388d6c1223c5100161aa4"
  },
  {
    "id": "5whfPfaQRqF6bF0ZtGX2k6",
    "href": "https://api.spotify.com/v1/tracks/5whfPfaQRqF6bF0ZtGX2k6",
    "name": "Ay! Jalisco No Te Rajes - Tuna de Ingenieros de Sevilla",
    "preview_url": "https://p.scdn.co/mp3-preview/9ee11946feca76f46a8643fa3f68a0e901d636d6?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514aa26a28059c124e0b4dc620"
  },
  {
    "id": "2LsGutksgjxXho3glPPgaU",
    "href": "https://api.spotify.com/v1/tracks/2LsGutksgjxXho3glPPgaU",
    "name": "Isa Canaria - Tuna Decana de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/42b0f07fcf54dc3b2f65fc83cc2cf128f65d45d2?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485120547e7e32c24dbb2a0af5bb"
  },
  {
    "id": "4q8WKLJdwinIlHfPYCCigs",
    "href": "https://api.spotify.com/v1/tracks/4q8WKLJdwinIlHfPYCCigs",
    "name": "Yo vendo unos ojos negros - Tuna Hispanoamericana",
    "preview_url": "https://p.scdn.co/mp3-preview/20cad8264cb006394a9f4026b92cc379eb9447aa?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514fd525d60ae7b764ab5b926c"
  },
  {
    "id": "1LQWPFIIV9DT5NAUcA2YG0",
    "href": "https://api.spotify.com/v1/tracks/1LQWPFIIV9DT5NAUcA2YG0",
    "name": "Te Traigo Serenata - Estudiantina De La Universidad De Guanajuato",
    "preview_url": "https://p.scdn.co/mp3-preview/30848cadbe7be37612d87517ed1c482c963d22f5?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485148e010db19504b475fcce2dc"
  },
  {
    "id": "4vbqBg6r278JIW6CthSHMn",
    "href": "https://api.spotify.com/v1/tracks/4vbqBg6r278JIW6CthSHMn",
    "name": "Alborada - Estudiantina De La Universidad Autonoma De Queretaro",
    "preview_url": "https://p.scdn.co/mp3-preview/17cf42a0a5d881242d3cd9f56c3dba17f4000f9c?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851119a63246de7a11695bf2070"
  },
  {
    "id": "4QGZSe4r35oJe1F126U65G",
    "href": "https://api.spotify.com/v1/tracks/4QGZSe4r35oJe1F126U65G",
    "name": "Despierta - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/0d5a87f5f25092e5d8eee38a7c5ccf8d3052144e?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048511d90e05a28262fccff22c97b"
  },
  {
    "id": "6Na8IOo49eJiMCv7AfKcxZ",
    "href": "https://api.spotify.com/v1/tracks/6Na8IOo49eJiMCv7AfKcxZ",
    "name": "Barlovento - En Vivo - Segreles",
    "preview_url": "https://p.scdn.co/mp3-preview/807750221b0c07ef26f61f4db4265610d9f43f91?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851544acbc828ebb4976ec74833"
  },
  {
    "id": "103dNu04AFcLqwCa1Gq1tH",
    "href": "https://api.spotify.com/v1/tracks/103dNu04AFcLqwCa1Gq1tH",
    "name": "Amalia Rosa - Tuna de Derecho y Económicas de la Universidad de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/5d989eca3141f55878cd43a8de8bdb29e1e0f8b6?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851a7809d9d9f3c0f514f371329"
  },
  {
    "id": "2dycf5swx6xgt2wuuv7M4J",
    "href": "https://api.spotify.com/v1/tracks/2dycf5swx6xgt2wuuv7M4J",
    "name": "Alma Llanera - Tuna Decana de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/16580d83a9376a39c64d11e56ad43ade052d12ed?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851fd1df2ee90c0d4720dcca380"
  },
  {
    "id": "6EwXX5UFXslJwBb8VRYCzK",
    "href": "https://api.spotify.com/v1/tracks/6EwXX5UFXslJwBb8VRYCzK",
    "name": "Cantiga - Tuna Universitaria de la Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/1ba5639c913c41667ffce22f45d289e6e339d103?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ab714fe637b44e432e71011c"
  },
  {
    "id": "3m7qoN4nJ42yl7qRBOh0zX",
    "href": "https://api.spotify.com/v1/tracks/3m7qoN4nJ42yl7qRBOh0zX",
    "name": "Despierta - Tuna de la Facultad de Veterinaria de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/a3e8be9c4aa05f7f338b8afe74eeec5546d03051?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851eafba6bec870e98ad8eb547f"
  },
  {
    "id": "4NMcEArX6BIbrIvuYOJoJy",
    "href": "https://api.spotify.com/v1/tracks/4NMcEArX6BIbrIvuYOJoJy",
    "name": "Recuerdos - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/89e681b69fd6260bab9362569e9137cc5a0d0ee6?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "6yjT2FD6Cqe5PSNCaKLIk7",
    "href": "https://api.spotify.com/v1/tracks/6yjT2FD6Cqe5PSNCaKLIk7",
    "name": "Dime Que Sí - Estudiantina \"La Salle\" De Puebla",
    "preview_url": "https://p.scdn.co/mp3-preview/208c0f3ec6a139c7a31cb4facc1b998c0eb1e418?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048510cfdfccf34822ae980e051fc"
  },
  {
    "id": "2mCOfZYN262cNaKVh7VfZO",
    "href": "https://api.spotify.com/v1/tracks/2mCOfZYN262cNaKVh7VfZO",
    "name": "De colores - Tuna De Aparejadores De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/6d96f1f823205ae1b9da0010074fecda51e6d04a?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514fd525d60ae7b764ab5b926c"
  },
  {
    "id": "1a7JR725CrYypiLfxF2tp9",
    "href": "https://api.spotify.com/v1/tracks/1a7JR725CrYypiLfxF2tp9",
    "name": "Alma Corazón y Vida - Los Panchos",
    "preview_url": "https://p.scdn.co/mp3-preview/69e120e0a1fec6436edcefc310696e7dae2e4871?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851b4d1d8ddbdcc2709f7c36967"
  },
  {
    "id": "2FKatNnr4GibumUwweRDZk",
    "href": "https://api.spotify.com/v1/tracks/2FKatNnr4GibumUwweRDZk",
    "name": "Mari Carmen - Tuna Universitaria",
    "preview_url": "https://p.scdn.co/mp3-preview/97e26bc2bf2ec82856e8f4ed538b93a97199fd94?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851861a921131cf9eae1fbbc0f3"
  },
  {
    "id": "0MvBtzAlqFPguy2sFa8rO3",
    "href": "https://api.spotify.com/v1/tracks/0MvBtzAlqFPguy2sFa8rO3",
    "name": "Agua del Pozo - Tuna de Derecho y Económicas de la Universidad de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/e1fffbf0c7bee0e74a5c861e5236c8670056b717?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e00a5a0f598ebcb456335968"
  },
  {
    "id": "4URuTAG86A7gGbpEjXcYHE",
    "href": "https://api.spotify.com/v1/tracks/4URuTAG86A7gGbpEjXcYHE",
    "name": "La Luna Es una Mujer - Tuna Decana de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/8ad31d013f42f986e35a1d4b1a634b899df69dcb?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485120547e7e32c24dbb2a0af5bb"
  },
  {
    "id": "5CnuoyGmhgr7nvMAkbpRpJ",
    "href": "https://api.spotify.com/v1/tracks/5CnuoyGmhgr7nvMAkbpRpJ",
    "name": "La Potra Zaina - Tuna Femenina Javeriana",
    "preview_url": "https://p.scdn.co/mp3-preview/19ebc6c2b840ce37dfff57f633323be387f5cdd5?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485134f86d152476a839a4235b91"
  },
  {
    "id": "2eeSmpABB2tiUpyViwFVvb",
    "href": "https://api.spotify.com/v1/tracks/2eeSmpABB2tiUpyViwFVvb",
    "name": "Amparito Roca - Tuna Peritos Industriales de Valencia",
    "preview_url": "https://p.scdn.co/mp3-preview/fdd8834dc999f3bd4ae523749e10e5a6ac3ff0d9?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e6237e0416421b190c5747f6"
  },
  {
    "id": "7bBuROvNRSo2vkWLSKfJUU",
    "href": "https://api.spotify.com/v1/tracks/7bBuROvNRSo2vkWLSKfJUU",
    "name": "Cartagena - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/3d872a5dec524899072f9a429133b9e530fcadd4?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "5Z5UY5gEwT42ydGIlLTs2Z",
    "href": "https://api.spotify.com/v1/tracks/5Z5UY5gEwT42ydGIlLTs2Z",
    "name": "Isas Canarias - Tuna de Derecho y Económicas de la Universidad de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/37fe7a7aa5dbdf041de8d2822ddbd334088c4820?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048510724ef37fb6465753d63c952"
  },
  {
    "id": "4W3uypVODTSICtj1bFqrNy",
    "href": "https://api.spotify.com/v1/tracks/4W3uypVODTSICtj1bFqrNy",
    "name": "Carnaval del 86 - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
    "preview_url": "https://p.scdn.co/mp3-preview/c1910a2e1879222a8738739c80938d2d669198b1?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514788624142222491d13fc531"
  },
  {
    "id": "1yZ6S8uoaOPShuvLgemXll",
    "href": "https://api.spotify.com/v1/tracks/1yZ6S8uoaOPShuvLgemXll",
    "name": "Vagabundo por Sta. Cruz - Tunos de Compostela",
    "preview_url": "https://p.scdn.co/mp3-preview/8132b69586ac15278b7bf31e0607e9569affb252?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514c5144974a573720d9e071d6"
  },
  {
    "id": "2yFvp0IuDfjsqka3SUK6rY",
    "href": "https://api.spotify.com/v1/tracks/2yFvp0IuDfjsqka3SUK6rY",
    "name": "Viva el Pasodoble - Tuna de la UNED de Úbeda",
    "preview_url": "https://p.scdn.co/mp3-preview/87a8cbcb4add6b83ad42c3813454c1770f1b6b3b?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851634b9a7f584792bff4eb0332"
  },
  {
    "id": "35Gm0ppbWZRaeHsqFDy4In",
    "href": "https://api.spotify.com/v1/tracks/35Gm0ppbWZRaeHsqFDy4In",
    "name": "Cintas De Mi Capa - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/e942fc792bf8986bafffb520e9a27813bcbc2bec?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851a73ae74d66eb5a76594c517a"
  },
  {
    "id": "6o7EXJdk4MrUAsTN2Al3wR",
    "href": "https://api.spotify.com/v1/tracks/6o7EXJdk4MrUAsTN2Al3wR",
    "name": "En la Noche Perfumada - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/158cbc81a3420e4b54eaffbf219d8ef5e3fe3dbf?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851b64781ad4869abd3861b5f5c"
  },
  {
    "id": "4jdNFJQRQNEHrh9fb4LMhe",
    "href": "https://api.spotify.com/v1/tracks/4jdNFJQRQNEHrh9fb4LMhe",
    "name": "Amparito Roca - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/f0e13499f31b76d316bc2c2c33c357e706136e4f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "3AEQuuo1YgSMdgKeDdnEsv",
    "href": "https://api.spotify.com/v1/tracks/3AEQuuo1YgSMdgKeDdnEsv",
    "name": "La Aurora - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/0fabd390de78c3bd8cdbc8a0bd67435db9e683ba?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048511d90e05a28262fccff22c97b"
  },
  {
    "id": "4R4ZMmBEeLi8cdsbsZTn8G",
    "href": "https://api.spotify.com/v1/tracks/4R4ZMmBEeLi8cdsbsZTn8G",
    "name": "El Beso - Tuna Ciudad de Luz",
    "preview_url": "https://p.scdn.co/mp3-preview/fd59dd9de3cebc394b5b6e0cac0524d9a08190a7?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ca67be0119fc987dc43af95c"
  },
  {
    "id": "28qtO7MGR1TXXcZEfbc0VF",
    "href": "https://api.spotify.com/v1/tracks/28qtO7MGR1TXXcZEfbc0VF",
    "name": "Imágenes de Ayer - Tuna de Masters",
    "preview_url": "https://p.scdn.co/mp3-preview/d6972c0ce76c281471b2acda59221dce1f770974?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048511cdb7abb91b47c27a7a8ded7"
  },
  {
    "id": "07qXOHSZxPdPrkzs0tvbEp",
    "href": "https://api.spotify.com/v1/tracks/07qXOHSZxPdPrkzs0tvbEp",
    "name": "La Maricarmen - Tuna De Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/3decc81c172ccb00f5cefb66691bb84c4ea4c004?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485162c474fabf20e6a54c393d07"
  },
  {
    "id": "4xyyX8f05DFpWnpWscMWz4",
    "href": "https://api.spotify.com/v1/tracks/4xyyX8f05DFpWnpWscMWz4",
    "name": "El Milagro de Tus Ojos - En Vivo - Segreles",
    "preview_url": "https://p.scdn.co/mp3-preview/5380a8216cb8857d2b6a2d61fdf8b196b7a20adf?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851544acbc828ebb4976ec74833"
  },
  {
    "id": "62lScIGmuUT9qCKSuanzTD",
    "href": "https://api.spotify.com/v1/tracks/62lScIGmuUT9qCKSuanzTD",
    "name": "Polo margariteño - Tuna Universitaria de la Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/9895777bd32670bd9250b2097f8f688327b0ee33?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ab714fe637b44e432e71011c"
  },
  {
    "id": "20fpNPZho7HhZzqqqcYUlm",
    "href": "https://api.spotify.com/v1/tracks/20fpNPZho7HhZzqqqcYUlm",
    "name": "Despierta - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/ec99fb68de02cdb156fedf413fd055e2d06fe7ad?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048511ed24d40761b9caaae5ac576"
  },
  {
    "id": "2QiwkkCMF5RsZSvjKZjiCE",
    "href": "https://api.spotify.com/v1/tracks/2QiwkkCMF5RsZSvjKZjiCE",
    "name": "El Parque - Tuna Universitaria",
    "preview_url": "https://p.scdn.co/mp3-preview/6fb3d019a8dbba2686be42ec3e966301b3733d0b?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048518048f37274f38bd543510013"
  },
  {
    "id": "4FnSXo3sOww3Tjwr0jpP2r",
    "href": "https://api.spotify.com/v1/tracks/4FnSXo3sOww3Tjwr0jpP2r",
    "name": "Tipitipitin - Estudiantina De La Universidad Autonoma De Queretaro",
    "preview_url": "https://p.scdn.co/mp3-preview/8e9b1a24aef03e6b39609362dc07d39b5461db90?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048515fe1731b953c55f0b72f81b0"
  },
  {
    "id": "0xOOfD04k29WcUYoBaUlve",
    "href": "https://api.spotify.com/v1/tracks/0xOOfD04k29WcUYoBaUlve",
    "name": "Las Cintas de Mi Capa - Tuna de la Facultad de Veterinaria de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/b16d436165a89da73b79fe82e8b2dc40131c9ec5?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851eafba6bec870e98ad8eb547f"
  },
  {
    "id": "1J8H4cEULTkGPY2ALNgtfb",
    "href": "https://api.spotify.com/v1/tracks/1J8H4cEULTkGPY2ALNgtfb",
    "name": "Cantinero De Cuba - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/fbee27295fa9ac1b3fc82d1bc8bc156dedc48a2b?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "4HZdjZ9OEFUC3R4O63e6qe",
    "href": "https://api.spotify.com/v1/tracks/4HZdjZ9OEFUC3R4O63e6qe",
    "name": "Cómo Fue - Tuna Bardos de la Universidad de Puerto Rico",
    "preview_url": "https://p.scdn.co/mp3-preview/ad000fb70619c39ccb059b83939754d55d19211d?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851341770a94ecd4cab6a873f46"
  },
  {
    "id": "3KCWAkDcnshCQBS5jJfPph",
    "href": "https://api.spotify.com/v1/tracks/3KCWAkDcnshCQBS5jJfPph",
    "name": "En Esta Noche Clara - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/0032eeb398b4f42c0c4050d1e6b003eeb46bd318?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "2VtMTrBQ1WfMQqeLAWLN29",
    "href": "https://api.spotify.com/v1/tracks/2VtMTrBQ1WfMQqeLAWLN29",
    "name": "Sebastopol - La Tuna",
    "preview_url": "https://p.scdn.co/mp3-preview/49d9955302dc55dfa363544c00de3530231fb115?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048516011e84c836653e8bd5eed22"
  },
  {
    "id": "6RMZzGBCjXLVG4uWQfQdTp",
    "href": "https://api.spotify.com/v1/tracks/6RMZzGBCjXLVG4uWQfQdTp",
    "name": "Las Golondrinas - La Tuna",
    "preview_url": "https://p.scdn.co/mp3-preview/60ef0249fde2123e49944e07de4f323d0fa49ed0?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ddbd571f00b1cc413f80d369"
  },
  {
    "id": "2Tv3zWKwUwsACjPTBLfT53",
    "href": "https://api.spotify.com/v1/tracks/2Tv3zWKwUwsACjPTBLfT53",
    "name": "El Milagro de Tus Ojos - Tuna Ciudad de Luz",
    "preview_url": "https://p.scdn.co/mp3-preview/7fa57963091fd4644afc0b9cf3884fae7d22fa4f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ca67be0119fc987dc43af95c"
  },
  {
    "id": "3cFRvrhyZIQ9lhFAMQE7Cw",
    "href": "https://api.spotify.com/v1/tracks/3cFRvrhyZIQ9lhFAMQE7Cw",
    "name": "En Esta Noche Clara - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/f878a5fdb235e7bd72127e8a2807c6a4222ec908?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048512c55854a922df4cd10f05d50"
  },
  {
    "id": "7dSQW25ZM7187M1C5gh9AO",
    "href": "https://api.spotify.com/v1/tracks/7dSQW25ZM7187M1C5gh9AO",
    "name": "La Tuna Compostelana - Tuna Arquitectura De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/d6f4faa98b80de535f0ad7339a35b30640689eb6?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851c3ebcf12e1b430bd13f6340c"
  },
  {
    "id": "28pNRjgnnK4rbXJCW4ObsW",
    "href": "https://api.spotify.com/v1/tracks/28pNRjgnnK4rbXJCW4ObsW",
    "name": "Locura Mía - Tuna Javeriana",
    "preview_url": "https://p.scdn.co/mp3-preview/68f17e0bb3422fd44b6beb89739162b9982ffc66?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048513244c73812888468154b681b"
  },
  {
    "id": "2jb2bZB9kvwkxClPJiXzoq",
    "href": "https://api.spotify.com/v1/tracks/2jb2bZB9kvwkxClPJiXzoq",
    "name": "El cuarto de tula - Tuna Universitaria de la Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/2385b0911502b83fa22fa19921154a0298dac5de?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851dcb6b9bf403899a60f116122"
  },
  {
    "id": "1FTItrCektmbPW6v5cnkmR",
    "href": "https://api.spotify.com/v1/tracks/1FTItrCektmbPW6v5cnkmR",
    "name": "Despierta mexicana - Tuna Hispanoamericana",
    "preview_url": "https://p.scdn.co/mp3-preview/d76d323f0e322ec9d435746e4f91d81cf8f2414c?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514fd525d60ae7b764ab5b926c"
  },
  {
    "id": "610O5LWdI9s6fAZweEHKzT",
    "href": "https://api.spotify.com/v1/tracks/610O5LWdI9s6fAZweEHKzT",
    "name": "Granada - Tuna Universitaria",
    "preview_url": "https://p.scdn.co/mp3-preview/0305ff434c09318c46c8e0de7f49ebda4277728f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851b8777a642797f31e092fcb5f"
  },
  {
    "id": "0LltRQ2k0O2TqZ9ltcUkj6",
    "href": "https://api.spotify.com/v1/tracks/0LltRQ2k0O2TqZ9ltcUkj6",
    "name": "Te Quiero - Tuna de Derecho UNAM",
    "preview_url": "https://p.scdn.co/mp3-preview/977757e28816ed5e4340da2bc78b73e415a435fd?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048513350eac6ec6593be84b0f86d"
  },
  {
    "id": "1bHWyOGxRPowvS9Bl92soR",
    "href": "https://api.spotify.com/v1/tracks/1bHWyOGxRPowvS9Bl92soR",
    "name": "Tuna Compostelana - Remastered - Tuna Universitaria Compostelana",
    "preview_url": "https://p.scdn.co/mp3-preview/93976b6669c564ef9c6bb292c02607d2042dc314?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e0d53ee6b1bbb594abd3654f"
  },
  {
    "id": "1CIfoHXv6gA3wN41fPh7JV",
    "href": "https://api.spotify.com/v1/tracks/1CIfoHXv6gA3wN41fPh7JV",
    "name": "Cordobesita - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
    "preview_url": "https://p.scdn.co/mp3-preview/e4d824a57b4b522450afb12a4a4707d30f63549d?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514788624142222491d13fc531"
  },
  {
    "id": "73v1gfVlvgI2HnCno2qlyt",
    "href": "https://api.spotify.com/v1/tracks/73v1gfVlvgI2HnCno2qlyt",
    "name": "María La Portuguesa - Tuna Universitaria",
    "preview_url": "https://p.scdn.co/mp3-preview/762a6df5a22276d55652af69c418dcad471422e7?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851fa1defbda97bd2b29a58d8b6"
  },
  {
    "id": "1G0Gg93WOnT2uaIj1CCrPn",
    "href": "https://api.spotify.com/v1/tracks/1G0Gg93WOnT2uaIj1CCrPn",
    "name": "No Duermas Niña Adorada - Tuna E.T. Peritos Industriales Valencia",
    "preview_url": "https://p.scdn.co/mp3-preview/112eae7456906073940dec83f3c713cd443ef77a?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485161922ee727694cce709368b3"
  },
  {
    "id": "21aMXRUdyfiJzCAZ8VaZED",
    "href": "https://api.spotify.com/v1/tracks/21aMXRUdyfiJzCAZ8VaZED",
    "name": "Manolo - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/e00167fa3c17660e931c7ed4396551833e162e93?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048511d90e05a28262fccff22c97b"
  },
  {
    "id": "2ejW9yXE4XCgoChLg9pCvt",
    "href": "https://api.spotify.com/v1/tracks/2ejW9yXE4XCgoChLg9pCvt",
    "name": "Valencia - Tuna Imperial de la FES Iztacala-UNAM",
    "preview_url": "https://p.scdn.co/mp3-preview/a3d64a759bff0b21f6e94dc3be2c60f6ef206e24?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851d60dc6e3c567581c22cc90da"
  },
  {
    "id": "1puU6M1ft5HWd2W5bYt2Pm",
    "href": "https://api.spotify.com/v1/tracks/1puU6M1ft5HWd2W5bYt2Pm",
    "name": "España Cañi - Tuna Decana de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/176ef18e544d91bca9a9233397e49bd32b9fa50d?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485120547e7e32c24dbb2a0af5bb"
  },
  {
    "id": "4sF6jbsG7tbj875lrMjh11",
    "href": "https://api.spotify.com/v1/tracks/4sF6jbsG7tbj875lrMjh11",
    "name": "Ojos De España - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/e5ad1ef9ef73dfb744b20db886e56676b374b3cd?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048512c55854a922df4cd10f05d50"
  },
  {
    "id": "0tQtFSdY9i4Dg4LyxPAG0r",
    "href": "https://api.spotify.com/v1/tracks/0tQtFSdY9i4Dg4LyxPAG0r",
    "name": "Termina la Feria - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/c49b8629b4ccc15fae9857fa0cb4b40e8682a522?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048511d90e05a28262fccff22c97b"
  },
  {
    "id": "4frbapAFByyEsTlmRLAPw2",
    "href": "https://api.spotify.com/v1/tracks/4frbapAFByyEsTlmRLAPw2",
    "name": "Si Vas a Calatayud (El Hijo de la Dolores) - Tuna de la Facultad de Derecho de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/e25eb312940bb66f71f0ad7f7667be9dfacf8fa6?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851081396d462015e7bce0d894f"
  },
  {
    "id": "61zaptrlXhTJda5qTS908b",
    "href": "https://api.spotify.com/v1/tracks/61zaptrlXhTJda5qTS908b",
    "name": "Adios a la Llanera - Los Sabandeños",
    "preview_url": "https://p.scdn.co/mp3-preview/060f2759fe9de1ddc914e7730b38fa6c3e271539?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851764729e83c11274b348a1ffe"
  },
  {
    "id": "6kdWY2ex0qFJ6GqLDrIFwQ",
    "href": "https://api.spotify.com/v1/tracks/6kdWY2ex0qFJ6GqLDrIFwQ",
    "name": "Por las Calles de Madrid - Tuna Decana de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/971b7129451581d18ecfcd1318e1edfa287a7d00?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851fd1df2ee90c0d4720dcca380"
  },
  {
    "id": "7KkOiGPxO5VrBzIyAg7RWP",
    "href": "https://api.spotify.com/v1/tracks/7KkOiGPxO5VrBzIyAg7RWP",
    "name": "La Suerte Loca - La Tuna",
    "preview_url": "https://p.scdn.co/mp3-preview/13dd7c29c58562c1e233a16086f7e8494a0d10a8?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ddbd571f00b1cc413f80d369"
  },
  {
    "id": "52fqfNuwSMmw2Pr0oTtKDh",
    "href": "https://api.spotify.com/v1/tracks/52fqfNuwSMmw2Pr0oTtKDh",
    "name": "La Tuna Pasa - Tuna Universitaria",
    "preview_url": "https://p.scdn.co/mp3-preview/b5b12911ecd9d21557f490da9e8384aa511ea670?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851b972cdf46e7c2a0c64bc118e"
  },
  {
    "id": "3tIWvUZKxdXCdPH7JYMa3M",
    "href": "https://api.spotify.com/v1/tracks/3tIWvUZKxdXCdPH7JYMa3M",
    "name": "La Hiedra - Tuna de Derecho UNAM",
    "preview_url": "https://p.scdn.co/mp3-preview/6217acbf4c9131eb3ee8a2047622a668a3af3ff8?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048516aa724154300c9ef3ce3de12"
  },
  {
    "id": "6MqvlYXC9LwQXyupTZNkPX",
    "href": "https://api.spotify.com/v1/tracks/6MqvlYXC9LwQXyupTZNkPX",
    "name": "Aires Vascos - Estudiantina De La Universidad De Guanajuato",
    "preview_url": "https://p.scdn.co/mp3-preview/c29036ad0dab438752418e44c11510389db32417?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485148e010db19504b475fcce2dc"
  },
  {
    "id": "4IsKyl7Y2zGMN2zo3aHgco",
    "href": "https://api.spotify.com/v1/tracks/4IsKyl7Y2zGMN2zo3aHgco",
    "name": "Fonseca - Tuna de la Facultad de Derecho de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/536fbff34bd3d0d98fbb1be55b882b66b15039b1?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851081396d462015e7bce0d894f"
  },
  {
    "id": "5nb20eWxN7jgylnZEPSlEs",
    "href": "https://api.spotify.com/v1/tracks/5nb20eWxN7jgylnZEPSlEs",
    "name": "El Bachiller - Estudiantina De La Universidad Autonoma De Queretaro",
    "preview_url": "https://p.scdn.co/mp3-preview/496b94755802a6f473dd3c6fd3196888a05ee0c4?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851f857c5601249f528430a8cce"
  },
  {
    "id": "1LXhv3QRH3Up00CaIhn4Xb",
    "href": "https://api.spotify.com/v1/tracks/1LXhv3QRH3Up00CaIhn4Xb",
    "name": "Tico Tico - Tuna Universitaria de la Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/28ce98ba0e5cd787443bcaf919511d415e6b15f2?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851dcb6b9bf403899a60f116122"
  },
  {
    "id": "3LlZXpqiJQN5YJdTNdvbzd",
    "href": "https://api.spotify.com/v1/tracks/3LlZXpqiJQN5YJdTNdvbzd",
    "name": "Flor Sin Retoño - Cuarentuna De La Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/fb5c3212f63c27b8dc93527d78ccc0f11b0d79c6?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851f1e994735aaf70b5216dfca0"
  },
  {
    "id": "3EAJkUgiajcrN9nXxk1BLo",
    "href": "https://api.spotify.com/v1/tracks/3EAJkUgiajcrN9nXxk1BLo",
    "name": "La Noche Perfumada - Tuna de la Facultad de Derecho de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/1418fcec6117359934294d78f20fde09062daefd?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851081396d462015e7bce0d894f"
  },
  {
    "id": "6kO4mCQvi4fZZLSaBuATBF",
    "href": "https://api.spotify.com/v1/tracks/6kO4mCQvi4fZZLSaBuATBF",
    "name": "San Fermin - Tuna De Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/c3b0cdfb64cb8c02dd90b828ffa43a3163e98c25?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851a96f9f75f20e2fe81e31558f"
  },
  {
    "id": "40fdNoJrRLGAgxT44CNVxk",
    "href": "https://api.spotify.com/v1/tracks/40fdNoJrRLGAgxT44CNVxk",
    "name": "Los Tunos - Tuna de la Facultad de Derecho de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/ae6ecb32a4633b51f56ea6a50394ce3a2db8b100?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851081396d462015e7bce0d894f"
  },
  {
    "id": "52blRrUiU8FMWyHprJtKUm",
    "href": "https://api.spotify.com/v1/tracks/52blRrUiU8FMWyHprJtKUm",
    "name": "Cuerdas De Mi Guitarra - Estudiantina De La Universidad Autonoma De Queretaro",
    "preview_url": "https://p.scdn.co/mp3-preview/1bfe04752dc4b5eb6f713150042945efdf9f15ad?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851c7e1e4906dbdcec31b24864c"
  },
  {
    "id": "6j2BRBqkFEJuYrqCooqpeC",
    "href": "https://api.spotify.com/v1/tracks/6j2BRBqkFEJuYrqCooqpeC",
    "name": "Mañana de Carnaval - Tuna Femenina Javeriana",
    "preview_url": "https://p.scdn.co/mp3-preview/2f431d8c69af83c45d7c00762a7efdea473ee765?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485134f86d152476a839a4235b91"
  },
  {
    "id": "3ML8Uy6PBMpgGKRIMAGuvb",
    "href": "https://api.spotify.com/v1/tracks/3ML8Uy6PBMpgGKRIMAGuvb",
    "name": "Amalia Rosa - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/421af83a18037aa57a423d835b2570b58ffc5c55?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "4qXoQ9XE2esoYLGGEFIQbE",
    "href": "https://api.spotify.com/v1/tracks/4qXoQ9XE2esoYLGGEFIQbE",
    "name": "Popurri del Joe - Tuna Femenina Javeriana",
    "preview_url": "https://p.scdn.co/mp3-preview/b914bf13e68056db0f0ed3538daf6529ced1e97a?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485134f86d152476a839a4235b91"
  },
  {
    "id": "57szmkHXSUFhzdUD45vAo0",
    "href": "https://api.spotify.com/v1/tracks/57szmkHXSUFhzdUD45vAo0",
    "name": "Mi Delito - Cuarentuna De La Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/4b8ba38ee153c346b1136c0a66d369a250b17436?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851f1e994735aaf70b5216dfca0"
  },
  {
    "id": "0BQXMBMiFDuRgEp73vLNet",
    "href": "https://api.spotify.com/v1/tracks/0BQXMBMiFDuRgEp73vLNet",
    "name": "Todos Los Besos - Los Rebujitos",
    "preview_url": "https://p.scdn.co/mp3-preview/5a41a8a4b3b54ded07581e62a08377f281f71fa6?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048511939e903b5dc2d65d9d53ac8"
  },
  {
    "id": "6kXzIYMiCdP99Y42Mjq1jB",
    "href": "https://api.spotify.com/v1/tracks/6kXzIYMiCdP99Y42Mjq1jB",
    "name": "Horas de Ronda - La Tuna",
    "preview_url": "https://p.scdn.co/mp3-preview/ddb0cd337e58a752df36920bb7cec5056d306043?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ddbd571f00b1cc413f80d369"
  },
  {
    "id": "53rPQBy7AlIspwsk5aufGk",
    "href": "https://api.spotify.com/v1/tracks/53rPQBy7AlIspwsk5aufGk",
    "name": "Santiago (Instrumental) - Remastered - Tuna Universitaria Compostelana",
    "preview_url": "https://p.scdn.co/mp3-preview/e89db591c75f9574de731da42f2ee88ba7101d0d?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e0d53ee6b1bbb594abd3654f"
  },
  {
    "id": "4Mztvg3eSKuqou5iggACL8",
    "href": "https://api.spotify.com/v1/tracks/4Mztvg3eSKuqou5iggACL8",
    "name": "Las Cintas De Mi Capa - Tuna Universitaria",
    "preview_url": "https://p.scdn.co/mp3-preview/cf0b466cafec17a11d751a311e28bcf24721b0d4?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851360845684bd3a9844370321e"
  },
  {
    "id": "0qCkrsPUF4vfnHLL9tCB18",
    "href": "https://api.spotify.com/v1/tracks/0qCkrsPUF4vfnHLL9tCB18",
    "name": "Dr. Zhivago - Tuna Universitaria",
    "preview_url": "https://p.scdn.co/mp3-preview/5a43c2e37abbedbbf9410af3a30dc23c31c16ad6?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851f5f44a6fd9abdb1ca3cfe768"
  },
  {
    "id": "4nS1nK2MLOmjittSM5HCox",
    "href": "https://api.spotify.com/v1/tracks/4nS1nK2MLOmjittSM5HCox",
    "name": "La Bikina - Estudiantina la Trobada de Santiago - Tuna León de los Aldama",
    "preview_url": "https://p.scdn.co/mp3-preview/77ea851606a9731790659428aca778143c8bccd3?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514a0535b5b9d90b0c36fab157"
  },
  {
    "id": "6PxwjEOFfyXquvIXFHvL4w",
    "href": "https://api.spotify.com/v1/tracks/6PxwjEOFfyXquvIXFHvL4w",
    "name": "Cielito Lindo - La Tuna",
    "preview_url": "https://p.scdn.co/mp3-preview/3561ada3d78417d12bda187e41e7b9ddd13f9a26?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048516011e84c836653e8bd5eed22"
  },
  {
    "id": "4hrGM1kQ6y8tiFSY6sgz40",
    "href": "https://api.spotify.com/v1/tracks/4hrGM1kQ6y8tiFSY6sgz40",
    "name": "La Paloma - Tuna Universitaria",
    "preview_url": "https://p.scdn.co/mp3-preview/09d2114de3130087f2f839f403c619dd3e98573f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851861a921131cf9eae1fbbc0f3"
  },
  {
    "id": "5nlKtyt4ew0qUQ1Tg8OSff",
    "href": "https://api.spotify.com/v1/tracks/5nlKtyt4ew0qUQ1Tg8OSff",
    "name": "Mar y Cielo - Tuna de la UNED de Úbeda",
    "preview_url": "https://p.scdn.co/mp3-preview/f89bd6525998c7d7d447e18bbd7a5cbcba527fde?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851634b9a7f584792bff4eb0332"
  },
  {
    "id": "3hN5fTBW2ZBx3pwe45JUyu",
    "href": "https://api.spotify.com/v1/tracks/3hN5fTBW2ZBx3pwe45JUyu",
    "name": "Clavelitos - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/c158074f1fd3580c3685f357f2d6f06cee3868a9?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "1NvL7AOROwUJ0HoMnMtWWu",
    "href": "https://api.spotify.com/v1/tracks/1NvL7AOROwUJ0HoMnMtWWu",
    "name": "La Flor de la Canela - Tuna Bardos de la Universidad de Puerto Rico",
    "preview_url": "https://p.scdn.co/mp3-preview/30890f8c3966f31d5a01ec75216d2dc732cb5a81?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485110ff34b9eef49ff424b38f38"
  },
  {
    "id": "4vPNo2qPSmoIFpJkx0A0lS",
    "href": "https://api.spotify.com/v1/tracks/4vPNo2qPSmoIFpJkx0A0lS",
    "name": "El Gato Montés - Tuna Femenina Javeriana",
    "preview_url": "https://p.scdn.co/mp3-preview/f4c761dd0c43e8ffb99ddb7c7dc7b49e88a14962?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485134f86d152476a839a4235b91"
  },
  {
    "id": "2SUkPqtVq0oDtDORKygJf6",
    "href": "https://api.spotify.com/v1/tracks/2SUkPqtVq0oDtDORKygJf6",
    "name": "Bendita Mi Tierra Guanche - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/5d0ba33303b5f3928d14d47ef6be5c4c7efc6e5f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "54xwcX0F3AIpMb3IKPxjMK",
    "href": "https://api.spotify.com/v1/tracks/54xwcX0F3AIpMb3IKPxjMK",
    "name": "El Trovador - Tuna de la E.T.S.E.T.B.",
    "preview_url": "https://p.scdn.co/mp3-preview/7f393c17f823f4a2768dfcad48b1770cc23a156a?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851a07236e56e3ed2a7f843866c"
  },
  {
    "id": "2RiUcAvJ4YuwcCtA9Xv1JU",
    "href": "https://api.spotify.com/v1/tracks/2RiUcAvJ4YuwcCtA9Xv1JU",
    "name": "Valencia - La Tuna",
    "preview_url": "https://p.scdn.co/mp3-preview/db800fc39a4e7d829dbdd93dc8bfebfc5388ac19?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ddbd571f00b1cc413f80d369"
  },
  {
    "id": "30jCoHS49KOQyVm2xH6PAE",
    "href": "https://api.spotify.com/v1/tracks/30jCoHS49KOQyVm2xH6PAE",
    "name": "Estudiantina Madrileña - Tuna Universitaria",
    "preview_url": "https://p.scdn.co/mp3-preview/f57fa87b629468ffac7f3376d53560dcdc05b8ec?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851b972cdf46e7c2a0c64bc118e"
  },
  {
    "id": "0qnhJOW2AemJYKypbJpuuT",
    "href": "https://api.spotify.com/v1/tracks/0qnhJOW2AemJYKypbJpuuT",
    "name": "La Tuna Pasa - Tuna de la Facultad de Derecho de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/2ef0b79bc7f7ed7ec118e7e8f08bfc5eff93e0b2?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851081396d462015e7bce0d894f"
  },
  {
    "id": "2Cehz0eWbKol4nELrNlKFQ",
    "href": "https://api.spotify.com/v1/tracks/2Cehz0eWbKol4nELrNlKFQ",
    "name": "Alma Llanera - En Vivo - Tuna de Derecho de la Universidad de San Martin de Porres",
    "preview_url": "https://p.scdn.co/mp3-preview/8e2c96457f9c7a080ed236f6a0d79e54fc0ab656?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851c66ac4666e97e585d8c2b86d"
  },
  {
    "id": "4J6au6kTf80d0uICLVC4er",
    "href": "https://api.spotify.com/v1/tracks/4J6au6kTf80d0uICLVC4er",
    "name": "Alturas Fiesta de San Benito - En Vivo - Segreles",
    "preview_url": "https://p.scdn.co/mp3-preview/02955176e5f2cee88ea8b2b31d20a42b224b0189?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851544acbc828ebb4976ec74833"
  },
  {
    "id": "2O4heMkfurrUsbzL3hBH61",
    "href": "https://api.spotify.com/v1/tracks/2O4heMkfurrUsbzL3hBH61",
    "name": "Cuerdas de mi guitarra - Tuna Normalista de Puebla",
    "preview_url": "https://p.scdn.co/mp3-preview/f2116efc0d8e41e89eadec3bbb7727498957b840?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851f22623be488a90beb5f13495"
  },
  {
    "id": "7f6IEmJJFQyUXKVwiFdcLp",
    "href": "https://api.spotify.com/v1/tracks/7f6IEmJJFQyUXKVwiFdcLp",
    "name": "Ay Ay Ay - Tuna De La Facultad De Farmacia De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/c23153deb478cdb94ff663abc0333711a6628637?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e00a5a0f598ebcb456335968"
  },
  {
    "id": "5KB7WSkObvzAOaEVFwAuqb",
    "href": "https://api.spotify.com/v1/tracks/5KB7WSkObvzAOaEVFwAuqb",
    "name": "Ronda del Silbidito - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/71b38df5c41b551f178f81519f86db8023cac31b?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485109ef3003c348e13cef047805"
  },
  {
    "id": "56tLhI2zyYZYZ4dpwwrLab",
    "href": "https://api.spotify.com/v1/tracks/56tLhI2zyYZYZ4dpwwrLab",
    "name": "Carrascosa - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/88208c319c4bafcbbeb8a2fd07bfee8af50879e4?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851a1e470c40617cca00272e453"
  },
  {
    "id": "6LbNlNgGYmG3vPgpVynAdP",
    "href": "https://api.spotify.com/v1/tracks/6LbNlNgGYmG3vPgpVynAdP",
    "name": "Tus ojos - Tuna Universitaria Compostelana",
    "preview_url": "https://p.scdn.co/mp3-preview/8adaf82c9ecdc987368f43ea960dbc0290835d44?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851315be364b37cb69e855a16da"
  },
  {
    "id": "3Tt3aANe0t2eQ19o41kDjO",
    "href": "https://api.spotify.com/v1/tracks/3Tt3aANe0t2eQ19o41kDjO",
    "name": "El Paso - La Tuna",
    "preview_url": "https://p.scdn.co/mp3-preview/1afe8fc99ef28d689b1e0ef3a3a3f9672efef0ed?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ddbd571f00b1cc413f80d369"
  },
  {
    "id": "7FnSbVVCU0c5JCvXPp9sEF",
    "href": "https://api.spotify.com/v1/tracks/7FnSbVVCU0c5JCvXPp9sEF",
    "name": "Yo Vendo Unos Ojos Negros - Estudiantina De La Universidad Autonoma De Queretaro",
    "preview_url": "https://p.scdn.co/mp3-preview/b18caac385ed32580aee60903a8ed532d9c158d4?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048515fe1731b953c55f0b72f81b0"
  },
  {
    "id": "1oEgrMCwRq7nRwrxn6l8MA",
    "href": "https://api.spotify.com/v1/tracks/1oEgrMCwRq7nRwrxn6l8MA",
    "name": "En Noche Lobrega - La Tuna",
    "preview_url": "https://p.scdn.co/mp3-preview/fe2946530d9474565bae9b0e94024b3b3a49ad34?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ddbd571f00b1cc413f80d369"
  },
  {
    "id": "0TV10aUSYnNB8geHIUnOqb",
    "href": "https://api.spotify.com/v1/tracks/0TV10aUSYnNB8geHIUnOqb",
    "name": "La Linda Tapada - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/00039b8ccb77dce2f9b8ffb1a972b9bbac05c258?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "55kdwKhMywgNnEeyhONaWI",
    "href": "https://api.spotify.com/v1/tracks/55kdwKhMywgNnEeyhONaWI",
    "name": "Recuerdos - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/90ed1e2160a7db9a5876bf18b4922f3387953281?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851a73ae74d66eb5a76594c517a"
  },
  {
    "id": "0YbJwQvIwKXlZpg7y6FZQe",
    "href": "https://api.spotify.com/v1/tracks/0YbJwQvIwKXlZpg7y6FZQe",
    "name": "Mi Ciudad - Cuarentuna De La Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/eb5f0a4d5bf360d62afcc2cea3e01fb69f7ae42f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851f1e994735aaf70b5216dfca0"
  },
  {
    "id": "0RSG7eNTKRQZpwVLdjiXy3",
    "href": "https://api.spotify.com/v1/tracks/0RSG7eNTKRQZpwVLdjiXy3",
    "name": "Maracaibo - Tuna Da Universidade Internacional",
    "preview_url": "https://p.scdn.co/mp3-preview/9cbc575f16c7d214aff5bc7e4c5cbaa85440c004?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514d906857fd3233b2b441b71f"
  },
  {
    "id": "3NKilXfhzpdN94LJMIopef",
    "href": "https://api.spotify.com/v1/tracks/3NKilXfhzpdN94LJMIopef",
    "name": "Mari Carmen - La Tuna",
    "preview_url": "https://p.scdn.co/mp3-preview/1580089629307536da2112a8b87ad43ffb6951e2?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ddbd571f00b1cc413f80d369"
  },
  {
    "id": "00DHKfio8dvRGK6wpWwNkL",
    "href": "https://api.spotify.com/v1/tracks/00DHKfio8dvRGK6wpWwNkL",
    "name": "Tema De Lara (Lara's Theme) - Estudiantina De La Universidad Autonoma De Queretaro",
    "preview_url": "https://p.scdn.co/mp3-preview/d368fc84269f3345eb1d51a193a6dbdf9b18f62a?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048516cb308fb5496f74c0fac525f"
  },
  {
    "id": "6oob7gEu4gcpC2bedSNZ0S",
    "href": "https://api.spotify.com/v1/tracks/6oob7gEu4gcpC2bedSNZ0S",
    "name": "Deja Que Salga la Luna - Tuna Femenina Javeriana",
    "preview_url": "https://p.scdn.co/mp3-preview/12829d8a28d62805b1d3fd9822f52d49458b38d4?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485134f86d152476a839a4235b91"
  },
  {
    "id": "78UGbr6OmQs4sym02BFPXI",
    "href": "https://api.spotify.com/v1/tracks/78UGbr6OmQs4sym02BFPXI",
    "name": "Elsa - Tuna de Derecho y Económicas de la Universidad de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/d20b963482f185e411d9bc1e9e1bf0b418c6cd64?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e00a5a0f598ebcb456335968"
  },
  {
    "id": "3eky787TeQ1wSCWsBia0Ue",
    "href": "https://api.spotify.com/v1/tracks/3eky787TeQ1wSCWsBia0Ue",
    "name": "Pranto - Remastered - Tuna Universitaria Compostelana",
    "preview_url": "https://p.scdn.co/mp3-preview/eae65fd081e0ce0b53d5f820f4644ecc97ece7a3?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e0d53ee6b1bbb594abd3654f"
  },
  {
    "id": "3hIkAkA5vyN9qqh0qzQjBR",
    "href": "https://api.spotify.com/v1/tracks/3hIkAkA5vyN9qqh0qzQjBR",
    "name": "Clavelitos - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/0d4d97121df90affc512232cc82a03f5d764f521?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048511d90e05a28262fccff22c97b"
  },
  {
    "id": "1TTSmOEYTFiFCcZfARV7BI",
    "href": "https://api.spotify.com/v1/tracks/1TTSmOEYTFiFCcZfARV7BI",
    "name": "Parate - Tuna Ciudad de Luz",
    "preview_url": "https://p.scdn.co/mp3-preview/788cabca6402f2966dcc5e385d0ea35d018245bd?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ca67be0119fc987dc43af95c"
  },
  {
    "id": "1JgKH53agNhMQeLMNYqJbo",
    "href": "https://api.spotify.com/v1/tracks/1JgKH53agNhMQeLMNYqJbo",
    "name": "Tres veces guapa - Tuna Normalista de Puebla",
    "preview_url": "https://p.scdn.co/mp3-preview/5092327afa3faaa198f9d0a0229931e6535d04e3?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851f22623be488a90beb5f13495"
  },
  {
    "id": "6emhoBO6mbVKV8iEdwX6sT",
    "href": "https://api.spotify.com/v1/tracks/6emhoBO6mbVKV8iEdwX6sT",
    "name": "Adios Granada - La Tuna",
    "preview_url": "https://p.scdn.co/mp3-preview/76f9d032c7db1bf5d8847f4bafd3f9c0af68a18c?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851bcf0e001e7baf0cd49a5f736"
  },
  {
    "id": "2PaETSKl3w3IdtLIbDnQXJ",
    "href": "https://api.spotify.com/v1/tracks/2PaETSKl3w3IdtLIbDnQXJ",
    "name": "El aire de la calle - Los Delinquentes",
    "preview_url": "https://p.scdn.co/mp3-preview/38322616092db115329735cd6a3a898e7bb7bae6?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851197a8b87fcdde907e7f0bc03"
  },
  {
    "id": "4dp4XucfqUAlL9oQlrJ4yS",
    "href": "https://api.spotify.com/v1/tracks/4dp4XucfqUAlL9oQlrJ4yS",
    "name": "Entre la tierra y el cielo - Tuna Universitaria de la Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/f031422fef9938dc4d9953450b173fd52882b483?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851dcb6b9bf403899a60f116122"
  },
  {
    "id": "2ojqQ1D311XCS0KX5SJqL9",
    "href": "https://api.spotify.com/v1/tracks/2ojqQ1D311XCS0KX5SJqL9",
    "name": "Cantinero De Cuba - Tuna de Derecho UNAM",
    "preview_url": "https://p.scdn.co/mp3-preview/9465bca99bb875fb1fbf3e957e21f67ff27d2015?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048516aa724154300c9ef3ce3de12"
  },
  {
    "id": "1iLLv9SKoy6ZXYuRUpKazS",
    "href": "https://api.spotify.com/v1/tracks/1iLLv9SKoy6ZXYuRUpKazS",
    "name": "Amalia - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/8c02d86a45b90986fb2ad903e61ee4b0e8864a53?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "6Jo5Zf1PtM1lmi3zAhPst3",
    "href": "https://api.spotify.com/v1/tracks/6Jo5Zf1PtM1lmi3zAhPst3",
    "name": "Tema de Lara - Grupo la Tuna Pasa",
    "preview_url": "https://p.scdn.co/mp3-preview/6bdbf475d2e1b79dc839333cdc0acbd70fb68649?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851b8777a642797f31e092fcb5f"
  },
  {
    "id": "60idIysLy80r4quYIlGkUL",
    "href": "https://api.spotify.com/v1/tracks/60idIysLy80r4quYIlGkUL",
    "name": "Y Viva España - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/4c5c7a68e7513aafd61d021bd0135027f8ecfe0f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851c278b020d889e1b750452f23"
  },
  {
    "id": "2JGg37B0Rp8yWW6j9F54Q1",
    "href": "https://api.spotify.com/v1/tracks/2JGg37B0Rp8yWW6j9F54Q1",
    "name": "Clavelitos - Tuna de la Facultad de Derecho de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/49d7e68b11cc97c59be8c38dece1f0e44df39b32?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851081396d462015e7bce0d894f"
  },
  {
    "id": "21k27pvgxXxjgEaSSBZzh2",
    "href": "https://api.spotify.com/v1/tracks/21k27pvgxXxjgEaSSBZzh2",
    "name": "La Banderita - Tuna de la Facultad de Derecho de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/2f1aaf62b9f3c55b107af93f3c15095a9ff042bd?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851081396d462015e7bce0d894f"
  },
  {
    "id": "6ydRNpwwe1D9ICqpBiC9r6",
    "href": "https://api.spotify.com/v1/tracks/6ydRNpwwe1D9ICqpBiC9r6",
    "name": "Melodias - Tuna Universitária do Instituto Superior Técnico",
    "preview_url": "https://p.scdn.co/mp3-preview/8abca00cda2371c97988ce6e65373b670e163d1b?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851517c7207df6ae58b2759205d"
  },
  {
    "id": "2C8mEU0AEHYyIlACNCJEO2",
    "href": "https://api.spotify.com/v1/tracks/2C8mEU0AEHYyIlACNCJEO2",
    "name": "Debajo de Tu Ventana - La Tuna",
    "preview_url": "https://p.scdn.co/mp3-preview/0a98975ff56a3eb0f366ba609fb1011f3eac0c18?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ddbd571f00b1cc413f80d369"
  },
  {
    "id": "2puqeu8heTfLaHgXgSZoxJ",
    "href": "https://api.spotify.com/v1/tracks/2puqeu8heTfLaHgXgSZoxJ",
    "name": "La Estudiantina Portuguesa - Tuna Arquitectura De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/843411f8c58d0c25b2aed6d3cfc6aa22f9554018?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851c3ebcf12e1b430bd13f6340c"
  },
  {
    "id": "4ol5QTyJanZnKB2RHmXqTn",
    "href": "https://api.spotify.com/v1/tracks/4ol5QTyJanZnKB2RHmXqTn",
    "name": "Ronda del Silbidito - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/1f0fe71b0d082d0d2298c9cdf46f060764689721?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048511ed24d40761b9caaae5ac576"
  },
  {
    "id": "613XjFx7LhuEevym0YLgE3",
    "href": "https://api.spotify.com/v1/tracks/613XjFx7LhuEevym0YLgE3",
    "name": "Valencia - Tuna Universitaria de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/974189b9a65834ab67227b178198937e2a2c1ffe?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851885ef7e0c758aa7a366796b7"
  },
  {
    "id": "3XkfgrTgUeB81CrxwVxrNM",
    "href": "https://api.spotify.com/v1/tracks/3XkfgrTgUeB81CrxwVxrNM",
    "name": "Pico Teide - Tuna Universitaria de la Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/c0f6977974028632575cb192e14f471911fca530?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ab714fe637b44e432e71011c"
  },
  {
    "id": "3hgCAo9hp6wRNzMSiwoQmK",
    "href": "https://api.spotify.com/v1/tracks/3hgCAo9hp6wRNzMSiwoQmK",
    "name": "Niña bonita - Tuna de Peritos Industriales de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/e3b3970a204fd836c2bcfa77a7fde11dc48b936c?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514fd525d60ae7b764ab5b926c"
  },
  {
    "id": "3mPE922bARG3OXWhC8Orcn",
    "href": "https://api.spotify.com/v1/tracks/3mPE922bARG3OXWhC8Orcn",
    "name": "Hoy Estoy Aqui - Tuna de Medicina do Porto",
    "preview_url": "https://p.scdn.co/mp3-preview/cc8ef7c3b42138be44e452b9a2149021bec63781?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048516bb5af10c52c13c360e68e13"
  },
  {
    "id": "55R8g49dwUjMff8Lkylg1l",
    "href": "https://api.spotify.com/v1/tracks/55R8g49dwUjMff8Lkylg1l",
    "name": "El Payador - Remastered - Tuna Universitaria Compostelana",
    "preview_url": "https://p.scdn.co/mp3-preview/9aa01cd0587ba838f135b583913f10b4f925dbd2?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e0d53ee6b1bbb594abd3654f"
  },
  {
    "id": "4wjRu0k0qTOT8fOXMw4LoP",
    "href": "https://api.spotify.com/v1/tracks/4wjRu0k0qTOT8fOXMw4LoP",
    "name": "Las Cintas de Mi Capa - Tuna de Derecho y Económicas de la Universidad de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/b9cc00666ac400943490a302fd16702917f4d446?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048510724ef37fb6465753d63c952"
  },
  {
    "id": "2WtkP43h0KCkAlUOH4qV5P",
    "href": "https://api.spotify.com/v1/tracks/2WtkP43h0KCkAlUOH4qV5P",
    "name": "La Maricarmen - Tuna De Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/287c5daf39b2afed3bddf50228030cc11b1f6b87?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851a96f9f75f20e2fe81e31558f"
  },
  {
    "id": "1WMqxTPcbFFjWxMIFXTxhf",
    "href": "https://api.spotify.com/v1/tracks/1WMqxTPcbFFjWxMIFXTxhf",
    "name": "Rondalla - Tuna de la Facultad de Derecho de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/220f53380137cf1223ea5330c128d096be6eda98?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851081396d462015e7bce0d894f"
  },
  {
    "id": "6zh74Ur6JQWoSc3bBfQfQy",
    "href": "https://api.spotify.com/v1/tracks/6zh74Ur6JQWoSc3bBfQfQy",
    "name": "La Uva - Tuna de la Escuela de Peritos Industriales de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/f3dfc72d472c4ff5df415c5628170ec887b87064?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851eafba6bec870e98ad8eb547f"
  },
  {
    "id": "1OW6zmG6Bfu2FHhD9i2KBa",
    "href": "https://api.spotify.com/v1/tracks/1OW6zmG6Bfu2FHhD9i2KBa",
    "name": "El Payador - Tuna Universitaria de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/95221be1d39c660cb64a47f990a8406d7dabe446?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851885ef7e0c758aa7a366796b7"
  },
  {
    "id": "4G8644UdWfpLkaPHnhTlDo",
    "href": "https://api.spotify.com/v1/tracks/4G8644UdWfpLkaPHnhTlDo",
    "name": "El dia que me quieras - Tuna Universitaria Compostelana",
    "preview_url": "https://p.scdn.co/mp3-preview/858cc3ba910103156f3665f84c9353ad19ba9538?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851315be364b37cb69e855a16da"
  },
  {
    "id": "4shDQyLj6td2tbPaKdRsLa",
    "href": "https://api.spotify.com/v1/tracks/4shDQyLj6td2tbPaKdRsLa",
    "name": "Naranjitay - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/3497e0b84d7915b2e8fe7e2013acc484a7e4a71b?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851a73ae74d66eb5a76594c517a"
  },
  {
    "id": "2jCC2vcitNmBYWL0NDMjhD",
    "href": "https://api.spotify.com/v1/tracks/2jCC2vcitNmBYWL0NDMjhD",
    "name": "Rondalla - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/11de4280af14368685d8073ccdc4ef7a440ff9e9?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048511d90e05a28262fccff22c97b"
  },
  {
    "id": "5Ksgxz6GBFongQJuBq34Ot",
    "href": "https://api.spotify.com/v1/tracks/5Ksgxz6GBFongQJuBq34Ot",
    "name": "Ojos de España - Remastered - Tuna Universitaria Compostelana",
    "preview_url": "https://p.scdn.co/mp3-preview/03c0e4b6df770f0f286c3ce2d979e4897b5100de?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e0d53ee6b1bbb594abd3654f"
  },
  {
    "id": "5RGwCKWOjwlYpunY3MVaKM",
    "href": "https://api.spotify.com/v1/tracks/5RGwCKWOjwlYpunY3MVaKM",
    "name": "La Tuna Pasa - Tuna Arquitectura De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/1adb3783ccb44ae23817d68aaec2621964f5b224?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851c3ebcf12e1b430bd13f6340c"
  },
  {
    "id": "2xmwHmmG1zFBCm0cIAlLLC",
    "href": "https://api.spotify.com/v1/tracks/2xmwHmmG1zFBCm0cIAlLLC",
    "name": "Amparito Roca (Instrumental) - Remastered - Tuna Universitaria Compostelana",
    "preview_url": "https://p.scdn.co/mp3-preview/f26ec05d5cef764986e3d6f4950b77cc3d001c9e?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e0d53ee6b1bbb594abd3654f"
  },
  {
    "id": "2GN7uy98lgVvuHthpEbEkG",
    "href": "https://api.spotify.com/v1/tracks/2GN7uy98lgVvuHthpEbEkG",
    "name": "La Sirena - Tuna de la Facultad de Derecho de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/f4564085448a9414cb8f293678bc60039a47cbc0?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851081396d462015e7bce0d894f"
  },
  {
    "id": "4p9c44p3ShcqJaPLib2A2Y",
    "href": "https://api.spotify.com/v1/tracks/4p9c44p3ShcqJaPLib2A2Y",
    "name": "Para Toda la Vida - Tuna Femenina Javeriana",
    "preview_url": "https://p.scdn.co/mp3-preview/f408f14d4ac0f660e5f27e7589db102659bf8b2c?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485134f86d152476a839a4235b91"
  },
  {
    "id": "1aIml1usG7QWhnrnarSRLb",
    "href": "https://api.spotify.com/v1/tracks/1aIml1usG7QWhnrnarSRLb",
    "name": "Despierta Niña - Tuna Universitaria de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/38c4ec8e509809ffaf6a0d19fe34372e98a10751?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485161922ee727694cce709368b3"
  },
  {
    "id": "53lWUFK4GvrJS7HafDaCBv",
    "href": "https://api.spotify.com/v1/tracks/53lWUFK4GvrJS7HafDaCBv",
    "name": "Estudiantina - Tuna de Peritos Industriales de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/b700df4a28fbffaf33d6f97d858c9a003311dbd5?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514fd525d60ae7b764ab5b926c"
  },
  {
    "id": "2nttoOEEXkHTaKmkJJMDGH",
    "href": "https://api.spotify.com/v1/tracks/2nttoOEEXkHTaKmkJJMDGH",
    "name": "Los Ojos de la Española - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/53f046c6c4546c53908fb36c8cfab5bc444d7ec6?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851d3c550dc52d36eae36f2135e"
  },
  {
    "id": "3mioVAZ5XeD4clwFbVv0Xo",
    "href": "https://api.spotify.com/v1/tracks/3mioVAZ5XeD4clwFbVv0Xo",
    "name": "Carrascosa - Tuna Universitaria",
    "preview_url": "https://p.scdn.co/mp3-preview/426c43a1dc78d7e75de1caf52c7263f3de8e5ec9?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851b8777a642797f31e092fcb5f"
  },
  {
    "id": "20MtOe5F9cVe2g1tWgJXLE",
    "href": "https://api.spotify.com/v1/tracks/20MtOe5F9cVe2g1tWgJXLE",
    "name": "Murcia - Tuna Universitaria de la Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/f9490cd14112e42e26132ef66656e7fd14f02fab?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ab714fe637b44e432e71011c"
  },
  {
    "id": "42XRhN5JqUpVGHYiuY7iwq",
    "href": "https://api.spotify.com/v1/tracks/42XRhN5JqUpVGHYiuY7iwq",
    "name": "La Sirena - Tuna de la Escuela de Peritos Industriales de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/92d98c97e003a2824a09e5f469b36b990d9355ac?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851eafba6bec870e98ad8eb547f"
  },
  {
    "id": "4fpnyLIk5XHd0MpIHd97ZR",
    "href": "https://api.spotify.com/v1/tracks/4fpnyLIk5XHd0MpIHd97ZR",
    "name": "Foneseca - Tuna Universitaria Compostelana",
    "preview_url": "https://p.scdn.co/mp3-preview/01ca7eb5ca4b62c019e6b116fbc1e5baa6054706?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851315be364b37cb69e855a16da"
  },
  {
    "id": "246S8EMGE7pkrixn7Ptlba",
    "href": "https://api.spotify.com/v1/tracks/246S8EMGE7pkrixn7Ptlba",
    "name": "Islas Canarias - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/43983c8f555c546d1d7366458a8a796f04a14a9e?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "7HIFv5ZgoVVzlhtlVdU94S",
    "href": "https://api.spotify.com/v1/tracks/7HIFv5ZgoVVzlhtlVdU94S",
    "name": "Volver a enamorarte - Tuna Universitaria de la Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/74007f6215931c6d0614165d9464e034c4912841?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ab714fe637b44e432e71011c"
  },
  {
    "id": "3VINc4qRxiy2XcFlfY0Zi3",
    "href": "https://api.spotify.com/v1/tracks/3VINc4qRxiy2XcFlfY0Zi3",
    "name": "Que Nadie Sepa Mi Sufrir - La Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/b3200898da7c37cccf184e5d0f2ea439a68731d1?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851762de4c6c4ba2e9ef01a263d"
  },
  {
    "id": "01cv0bcem2RBZBYsL53efO",
    "href": "https://api.spotify.com/v1/tracks/01cv0bcem2RBZBYsL53efO",
    "name": "Sueño Imposible - Estudiantina De La Universidad Autonoma De Queretaro",
    "preview_url": "https://p.scdn.co/mp3-preview/32b70abfc35c40f43a1ffe4c77e4df2d1136b564?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851198fd4093d62db1662edf4d5"
  },
  {
    "id": "1CIOnEMcVcsM0s35ce7MWS",
    "href": "https://api.spotify.com/v1/tracks/1CIOnEMcVcsM0s35ce7MWS",
    "name": "Fonseca - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/c0ba064fb7983ec693037c237d4c9b562c16384f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851a1e470c40617cca00272e453"
  },
  {
    "id": "2spPS9ZhLb3gBaC00d8i5u",
    "href": "https://api.spotify.com/v1/tracks/2spPS9ZhLb3gBaC00d8i5u",
    "name": "Clavelitos - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/5f9f840d08dc82a422b1ac8c08005aa55b9fc77c?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485109ef3003c348e13cef047805"
  },
  {
    "id": "3fCc3BJuWeMa1qY7i45yft",
    "href": "https://api.spotify.com/v1/tracks/3fCc3BJuWeMa1qY7i45yft",
    "name": "Lagrimas Negras - Tuna Uabjo",
    "preview_url": "https://p.scdn.co/mp3-preview/b318616bcb1807e9f1704b8d49a0a2313d2b68fd?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851685e46184d16e8914eadc362"
  },
  {
    "id": "6cNvGNPjZbYFk7W2DUODj5",
    "href": "https://api.spotify.com/v1/tracks/6cNvGNPjZbYFk7W2DUODj5",
    "name": "Yo Sin Ti - En Vivo - Segreles",
    "preview_url": "https://p.scdn.co/mp3-preview/68ab933eefffeafc630527346c39361b244ec7f8?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851544acbc828ebb4976ec74833"
  },
  {
    "id": "2nY7viCHBhuNUY0zLJu0Pf",
    "href": "https://api.spotify.com/v1/tracks/2nY7viCHBhuNUY0zLJu0Pf",
    "name": "Si Vas a Calatayud - Tuna Universitaria De La Facultad De Medicina",
    "preview_url": "https://p.scdn.co/mp3-preview/7546cfd344c2d3cab82c8af9212555702b1329ab?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851d3c550dc52d36eae36f2135e"
  },
  {
    "id": "7qSMmykEpAKuTEgh2jlstu",
    "href": "https://api.spotify.com/v1/tracks/7qSMmykEpAKuTEgh2jlstu",
    "name": "Vuela Una Lágrima - Tuna de Derecho UNAM",
    "preview_url": "https://p.scdn.co/mp3-preview/c55768b032b3caedf8e5ffab9819b54aeab0821f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048513350eac6ec6593be84b0f86d"
  },
  {
    "id": "6xwXCx6GNbm2DcorSwzsgO",
    "href": "https://api.spotify.com/v1/tracks/6xwXCx6GNbm2DcorSwzsgO",
    "name": "Capricho Andaluz - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
    "preview_url": "https://p.scdn.co/mp3-preview/6d6b37d6deac8c99d2cadd3ff8c87024731659d8?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514788624142222491d13fc531"
  },
  {
    "id": "6ShbVXjVeFDzg5WTQ03dOb",
    "href": "https://api.spotify.com/v1/tracks/6ShbVXjVeFDzg5WTQ03dOb",
    "name": "Barrio Brujo - Tuna Universitaria",
    "preview_url": "https://p.scdn.co/mp3-preview/c57f8fb980423c455ac496c4d94b34d31a8c45fa?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048518048f37274f38bd543510013"
  },
  {
    "id": "1b8iVp2rMldwXVSp3tAiOH",
    "href": "https://api.spotify.com/v1/tracks/1b8iVp2rMldwXVSp3tAiOH",
    "name": "Pepita Creus - Tuna de la Facultad de Derecho de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/94811f6501a253c4d4df27769919f4be02512a19?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851081396d462015e7bce0d894f"
  },
  {
    "id": "0InZMCpOOAtaE7JCDYPSOP",
    "href": "https://api.spotify.com/v1/tracks/0InZMCpOOAtaE7JCDYPSOP",
    "name": "Pequeña flor de primavera - Tuna Imperial de la FES Iztacala-UNAM",
    "preview_url": "https://p.scdn.co/mp3-preview/131c24f0b832e5124fb19f23726cd43ef0b1f077?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851d60dc6e3c567581c22cc90da"
  },
  {
    "id": "4GuCMoNA6cNZurlN8oGZ7h",
    "href": "https://api.spotify.com/v1/tracks/4GuCMoNA6cNZurlN8oGZ7h",
    "name": "Hoy - Tuna Femenina Javeriana",
    "preview_url": "https://p.scdn.co/mp3-preview/5c17be5aaf77853c2c3f4759dc6d36354b36f204?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485134f86d152476a839a4235b91"
  },
  {
    "id": "1JPR7YRTcbTOx0nwBmBNMC",
    "href": "https://api.spotify.com/v1/tracks/1JPR7YRTcbTOx0nwBmBNMC",
    "name": "El Beso - Tuna de Juglares",
    "preview_url": "https://p.scdn.co/mp3-preview/979629bc059836601d20126ff71c612adcb8f9a0?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851097e396f6d64f5b108c68f30"
  },
  {
    "id": "6mwNPe7Br1Ode9OjBuOpuj",
    "href": "https://api.spotify.com/v1/tracks/6mwNPe7Br1Ode9OjBuOpuj",
    "name": "Estudiantina Madrileña - Tuna de la Facultad de Derecho de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/6d720786e1421e97d8f4783c8c6d950227ebaabf?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851081396d462015e7bce0d894f"
  },
  {
    "id": "6658IZdXFReEwCpJjT7FJ9",
    "href": "https://api.spotify.com/v1/tracks/6658IZdXFReEwCpJjT7FJ9",
    "name": "El Vito - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
    "preview_url": "https://p.scdn.co/mp3-preview/73c69cc461276cd6a7a16ad5da7916216de59682?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514788624142222491d13fc531"
  },
  {
    "id": "6SPAuuMAxWoKIT1rX5cPTY",
    "href": "https://api.spotify.com/v1/tracks/6SPAuuMAxWoKIT1rX5cPTY",
    "name": "Pavana - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
    "preview_url": "https://p.scdn.co/mp3-preview/953ee17fddbcfbf526a9a29bb6416ab18806092f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514788624142222491d13fc531"
  },
  {
    "id": "7gaF6Lg12NlXwJ6VO7uPMR",
    "href": "https://api.spotify.com/v1/tracks/7gaF6Lg12NlXwJ6VO7uPMR",
    "name": "La Sirena - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/bdfc7444497e8e8520d3187ca225e1c64ca7c940?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851b4957aa75893349e6ceaf30e"
  },
  {
    "id": "6PB6edqJ4cpEr6a0nUOQKj",
    "href": "https://api.spotify.com/v1/tracks/6PB6edqJ4cpEr6a0nUOQKj",
    "name": "Popurri de Valses - Cuarentuna De La Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/9156e4f47899fbb26fb23af2f4084a7b2ebfd86f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851f1e994735aaf70b5216dfca0"
  },
  {
    "id": "13bpvmSE3gB6BSkal5tdCO",
    "href": "https://api.spotify.com/v1/tracks/13bpvmSE3gB6BSkal5tdCO",
    "name": "La Bikina - En Vivo - Segreles",
    "preview_url": "https://p.scdn.co/mp3-preview/e5d3b07a2958ad51572e3272d8f9132925176ca5?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851544acbc828ebb4976ec74833"
  },
  {
    "id": "0GLnIJzJu3sdGQlbRiTzC1",
    "href": "https://api.spotify.com/v1/tracks/0GLnIJzJu3sdGQlbRiTzC1",
    "name": "Oh Maribel - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/50dac8de7789db0201fc4e3718797fd7bd24f1d3?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048511ed24d40761b9caaae5ac576"
  },
  {
    "id": "5VCVpNk4dmSCt15RytaqZe",
    "href": "https://api.spotify.com/v1/tracks/5VCVpNk4dmSCt15RytaqZe",
    "name": "Horas de Ronda - Tuna de Derecho y Económicas de la Universidad de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/068dd88dd8c293e1695f0421d3bdf50460dd05e1?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851a7809d9d9f3c0f514f371329"
  },
  {
    "id": "3x9TIt2ae7TOY7b7Jl57JN",
    "href": "https://api.spotify.com/v1/tracks/3x9TIt2ae7TOY7b7Jl57JN",
    "name": "La Ronda de las Estrellas - Tuna de la Escuela de Peritos Industriales de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/341b744b931ab9130173a2fd10eb79baac8753ac?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851eafba6bec870e98ad8eb547f"
  },
  {
    "id": "0GY5xRsCZ3DIB3sgqFC4tv",
    "href": "https://api.spotify.com/v1/tracks/0GY5xRsCZ3DIB3sgqFC4tv",
    "name": "Malagueña - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/0796b30068732297a6902d479ee0359a734ec5c8?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048512c55854a922df4cd10f05d50"
  },
  {
    "id": "32TWl72P8TIW1Oi7yJvVQD",
    "href": "https://api.spotify.com/v1/tracks/32TWl72P8TIW1Oi7yJvVQD",
    "name": "Rondador - Tuna de Derecho y Económicas de la Universidad de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/ef83036c54eb2b0a614e5b7f6557a9d6c4a3933e?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048510724ef37fb6465753d63c952"
  },
  {
    "id": "4K6YEHsTR30y0HZtA7nUVz",
    "href": "https://api.spotify.com/v1/tracks/4K6YEHsTR30y0HZtA7nUVz",
    "name": "La Aurora - Tuna Decana de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/dee12495e3b08ac029e3be3c1e9beca5768d07f1?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ea0af71165ee66baf3b9c0fb"
  },
  {
    "id": "149RjX0mpQgFwFRJgGBSJC",
    "href": "https://api.spotify.com/v1/tracks/149RjX0mpQgFwFRJgGBSJC",
    "name": "Sin ti-Así Es La Vida - Tuna de Derecho UNAM",
    "preview_url": "https://p.scdn.co/mp3-preview/9c8a37b3b65ae3af309fec0690bc6debde676594?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048516aa724154300c9ef3ce3de12"
  },
  {
    "id": "2h4qIHtEKQRxgjR2Dx4VOA",
    "href": "https://api.spotify.com/v1/tracks/2h4qIHtEKQRxgjR2Dx4VOA",
    "name": "La Estudiantina Madrileña - Tuna Arquitectura De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/a9860da4cce678c95b88efd7a0cc4e4d585c9d5c?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851c3ebcf12e1b430bd13f6340c"
  },
  {
    "id": "1ay4gKstxMOCakGetpz2tk",
    "href": "https://api.spotify.com/v1/tracks/1ay4gKstxMOCakGetpz2tk",
    "name": "Magdalena - Tuna de Derecho y Económicas de la Universidad de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/7e9a0c2d1a87c14479443150851f18b057b4c295?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048510724ef37fb6465753d63c952"
  },
  {
    "id": "2xX5ndquyznHbDA2Z0mjx0",
    "href": "https://api.spotify.com/v1/tracks/2xX5ndquyznHbDA2Z0mjx0",
    "name": "Pepita Creus - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
    "preview_url": "https://p.scdn.co/mp3-preview/95e56d9da92b982034cc343b759bacc899c5a7b9?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514788624142222491d13fc531"
  },
  {
    "id": "3tgPel0hydkZbLdLUfaLIi",
    "href": "https://api.spotify.com/v1/tracks/3tgPel0hydkZbLdLUfaLIi",
    "name": "Popurri Vasco - Tuna Decana de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/29ba21000f8625647c021c254a565671852e9c1b?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485120547e7e32c24dbb2a0af5bb"
  },
  {
    "id": "1D69x8yTYs6op1mYMtwRWa",
    "href": "https://api.spotify.com/v1/tracks/1D69x8yTYs6op1mYMtwRWa",
    "name": "Luna de españa - Tuna Universitaria Compostelana",
    "preview_url": "https://p.scdn.co/mp3-preview/dc715d17b757b1fcd1b40fa95b7b57cccc3f6ded?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851315be364b37cb69e855a16da"
  },
  {
    "id": "5OYTQfTjDe3Gy306m7zNjH",
    "href": "https://api.spotify.com/v1/tracks/5OYTQfTjDe3Gy306m7zNjH",
    "name": "Czardas - Tuna Universitaria de la Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/87cb047b0f81ba510a9f9dd4c44a6a406de330ba?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ab714fe637b44e432e71011c"
  },
  {
    "id": "75QxaT8xKcJWLDnUojp30c",
    "href": "https://api.spotify.com/v1/tracks/75QxaT8xKcJWLDnUojp30c",
    "name": "Esta Noche No Alumbra - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/b51eda91a8597af2d2ef05812eed2c455b83e72b?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485109ef3003c348e13cef047805"
  },
  {
    "id": "7iXW4mAVnTAfUS2X2ad6s0",
    "href": "https://api.spotify.com/v1/tracks/7iXW4mAVnTAfUS2X2ad6s0",
    "name": "Los Gitanos - La Tuna",
    "preview_url": "https://p.scdn.co/mp3-preview/42fa45550389d3614fb51a61ee63836ebae09aaa?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ddbd571f00b1cc413f80d369"
  },
  {
    "id": "5ZBW7dk68iMMdcvKB3sXHt",
    "href": "https://api.spotify.com/v1/tracks/5ZBW7dk68iMMdcvKB3sXHt",
    "name": "Adelita - Tuna Escuela De Ingenieros Tec. Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/e81a7f5f8a05a87d730150b3c97289a12f5e6ce3?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851f8421d1dd6851e91d518b88b"
  },
  {
    "id": "6HW6pZF8Zoa66asxh08UUp",
    "href": "https://api.spotify.com/v1/tracks/6HW6pZF8Zoa66asxh08UUp",
    "name": "La Vecina - Tuna Femenina Javeriana",
    "preview_url": "https://p.scdn.co/mp3-preview/b8b700f7dd0b0eb0624d11825f194346ad22df5a?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485134f86d152476a839a4235b91"
  },
  {
    "id": "4tFvVtY4VrcWu93STx74pp",
    "href": "https://api.spotify.com/v1/tracks/4tFvVtY4VrcWu93STx74pp",
    "name": "Doce Cascabeles - Estudiantina De La Universidad De Guanajuato",
    "preview_url": "https://p.scdn.co/mp3-preview/5aa3166e953c331253f6b2cc839895e00c661480?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e11a6c96d85af2c383853d86"
  },
  {
    "id": "6qkpogYbOUeO2a7LYi0ujR",
    "href": "https://api.spotify.com/v1/tracks/6qkpogYbOUeO2a7LYi0ujR",
    "name": "Que Nadie Sepa Mi Sufrir - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/7599a93d965b381180c6221a6d66eb6464fbdd17?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "3h6HxA6BCAP3MMbGHJlBNd",
    "href": "https://api.spotify.com/v1/tracks/3h6HxA6BCAP3MMbGHJlBNd",
    "name": "Debajo de Tu Balcón - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/372bc342863ecf44c92735400926871411f2c43b?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851430072c6c14479bfa8782155"
  },
  {
    "id": "1aIKQrvMaTaadymYZ7GOUa",
    "href": "https://api.spotify.com/v1/tracks/1aIKQrvMaTaadymYZ7GOUa",
    "name": "Ojos Españoles - Estudiantina De La Universidad De Guanajuato",
    "preview_url": "https://p.scdn.co/mp3-preview/f2c5887d6ba39b63de5a470c8ddb58b033b48b1d?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e11a6c96d85af2c383853d86"
  },
  {
    "id": "3ysNm0c4tnGmS8txqil2RI",
    "href": "https://api.spotify.com/v1/tracks/3ysNm0c4tnGmS8txqil2RI",
    "name": "La Melitona - Tuna de la Escuela de Peritos Industriales de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/72fdee3561c4a34d15ab360688d464d4ae3655f8?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851eafba6bec870e98ad8eb547f"
  },
  {
    "id": "4nvSAcx0u3ZGiHYWQY8aOj",
    "href": "https://api.spotify.com/v1/tracks/4nvSAcx0u3ZGiHYWQY8aOj",
    "name": "El Organillero - Rondalla De La Universidad Potosina",
    "preview_url": "https://p.scdn.co/mp3-preview/dd7d9cdabb103a2a2e5fb48bc70acc416bb72821?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048512c1ba2e3fd4fc095a2330634"
  },
  {
    "id": "5ZtdCg96VEzQClEZiZNJGz",
    "href": "https://api.spotify.com/v1/tracks/5ZtdCg96VEzQClEZiZNJGz",
    "name": "La Aurora - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/a6eeee8b5d324265e0a89b7538db6a2648d31222?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "5gPB2zl45IPID1T6MCPh0k",
    "href": "https://api.spotify.com/v1/tracks/5gPB2zl45IPID1T6MCPh0k",
    "name": "Tuna Compostelana - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/7d6b0f1dbf935183a34cc902b02fe61c98e4c189?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "3Qw66yR4esvNahLZmFt7Xf",
    "href": "https://api.spotify.com/v1/tracks/3Qw66yR4esvNahLZmFt7Xf",
    "name": "Se Va - Tuna de Derecho y Económicas de la Universidad de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/43099a29de1798748b83274a5a28bee6ad83750f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485161922ee727694cce709368b3"
  },
  {
    "id": "7b50Ic9jLpTCkwBotRN3dL",
    "href": "https://api.spotify.com/v1/tracks/7b50Ic9jLpTCkwBotRN3dL",
    "name": "Canciones de amor - Tuna Universitaria de la Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/2d88b6b4073bdc8f76387cd0e47486710218e7c2?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ab714fe637b44e432e71011c"
  },
  {
    "id": "2DAkMurmGSoHH57hZo8p6m",
    "href": "https://api.spotify.com/v1/tracks/2DAkMurmGSoHH57hZo8p6m",
    "name": "Fonseca - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/384d231f3fc15d897b5fe329f1e7f5f43ceed6b0?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048511d90e05a28262fccff22c97b"
  },
  {
    "id": "5YgeDRKxrWhwtZOXEIkZDE",
    "href": "https://api.spotify.com/v1/tracks/5YgeDRKxrWhwtZOXEIkZDE",
    "name": "Estudiantina Madrileña - Tuna Universitaria de Granada",
    "preview_url": "https://p.scdn.co/mp3-preview/f37bcc04a004f39ac9e3d72ae4c450df35bf9e9e?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851621bc411b9112015c9fe7afa"
  },
  {
    "id": "4SF1F2kOUVJe83X8OrGx51",
    "href": "https://api.spotify.com/v1/tracks/4SF1F2kOUVJe83X8OrGx51",
    "name": "Estudiantina Portuguesa - Tuna de Derecho y Económicas de la Universidad de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/0cbf7e44e20030fb186a1f0a2a002f45aec2612f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851a7809d9d9f3c0f514f371329"
  },
  {
    "id": "0NOASsON6VF5aIv3pI5au7",
    "href": "https://api.spotify.com/v1/tracks/0NOASsON6VF5aIv3pI5au7",
    "name": "Oh Mary - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/6d0e1a5c8658461468f756852b3335482bbf76c2?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485109ef3003c348e13cef047805"
  },
  {
    "id": "1BM3OttW6bV4dU3dNR5qgf",
    "href": "https://api.spotify.com/v1/tracks/1BM3OttW6bV4dU3dNR5qgf",
    "name": "Maribel - Tuna Decana de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/c0cda20f5cdfc69eed12f159a9f92e52b83e862f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851fd1df2ee90c0d4720dcca380"
  },
  {
    "id": "4qZIl2mnDdeBENI6z4nw2Y",
    "href": "https://api.spotify.com/v1/tracks/4qZIl2mnDdeBENI6z4nw2Y",
    "name": "Despierta Niña - La Tuna",
    "preview_url": "https://p.scdn.co/mp3-preview/6cc1114bd0ff07de6baab1bd25b6655efd3ebf6c?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ddbd571f00b1cc413f80d369"
  },
  {
    "id": "6Rhb6Qg5hYutR2XZcsG7Jt",
    "href": "https://api.spotify.com/v1/tracks/6Rhb6Qg5hYutR2XZcsG7Jt",
    "name": "Beber - Tuna Hispanoamericana",
    "preview_url": "https://p.scdn.co/mp3-preview/5a51dc7ac5fc5c8992d1eef620e9775d7e03fc4b?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514fd525d60ae7b764ab5b926c"
  },
  {
    "id": "5hiNO7hLMz3wgJFi4Mz1zL",
    "href": "https://api.spotify.com/v1/tracks/5hiNO7hLMz3wgJFi4Mz1zL",
    "name": "Guadalajara - Estudiantina De La Universidad Autonoma de Guadalajara",
    "preview_url": "https://p.scdn.co/mp3-preview/b8a36d3899116745b4f8a8eb717071adda86be80?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851206a191d33033d5d00abd907"
  },
  {
    "id": "2hzlgWKUsqSxeT5IYoUkuV",
    "href": "https://api.spotify.com/v1/tracks/2hzlgWKUsqSxeT5IYoUkuV",
    "name": "Despierta - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/ec99fb68de02cdb156fedf413fd055e2d06fe7ad?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485109ef3003c348e13cef047805"
  },
  {
    "id": "1iFvaxxhGjW6HMYXRO0ZMQ",
    "href": "https://api.spotify.com/v1/tracks/1iFvaxxhGjW6HMYXRO0ZMQ",
    "name": "El Cóndor Pasa - Estudiantina De La Universidad Autonoma De Queretaro",
    "preview_url": "https://p.scdn.co/mp3-preview/128cac921d60470d0ef9a7c8e9e3ede9725aadde?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851c7e1e4906dbdcec31b24864c"
  },
  {
    "id": "1JXnS2It3lEQVpk2j2rjge",
    "href": "https://api.spotify.com/v1/tracks/1JXnS2It3lEQVpk2j2rjge",
    "name": "Sabor A Mí - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/a5faaa43e836f5c4eaf7da33bb13693779addf9d?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "4OWAEzm4UNftWiNKpVleRl",
    "href": "https://api.spotify.com/v1/tracks/4OWAEzm4UNftWiNKpVleRl",
    "name": "Si Tú Me Dices Ven - Parrandboleros",
    "preview_url": "https://p.scdn.co/mp3-preview/8ce4d5dcc79a08cb5566f9d534da8123f90d77cf?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851f573a37ada17dc2bf2283231"
  },
  {
    "id": "5zM8KkviRUv4uKyKf1X1Ii",
    "href": "https://api.spotify.com/v1/tracks/5zM8KkviRUv4uKyKf1X1Ii",
    "name": "Popurrí Quechua - Tuna Femenina Javeriana",
    "preview_url": "https://p.scdn.co/mp3-preview/65a64b6b375f1da03c42323fe7b5ce36fbbcfab5?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485134f86d152476a839a4235b91"
  },
  {
    "id": "5U5YTdgoD2iBzRsXHGf9bt",
    "href": "https://api.spotify.com/v1/tracks/5U5YTdgoD2iBzRsXHGf9bt",
    "name": "Cuerdas De Mi Guitarra - Estudiantina De La Universidad De Guanajuato",
    "preview_url": "https://p.scdn.co/mp3-preview/92d982407ba7906d3cd84edd659e4793771cd76d?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048510d5b3927fa55ac2197782795"
  },
  {
    "id": "6AKk4EHW0w9uwoxmoeVykV",
    "href": "https://api.spotify.com/v1/tracks/6AKk4EHW0w9uwoxmoeVykV",
    "name": "Valencia - Tuna Universitaria",
    "preview_url": "https://p.scdn.co/mp3-preview/65eaa9c61c8a653772cd45d14b05910a6f754663?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851861a921131cf9eae1fbbc0f3"
  },
  {
    "id": "1EyYxDefQR89u1w6l6aWNQ",
    "href": "https://api.spotify.com/v1/tracks/1EyYxDefQR89u1w6l6aWNQ",
    "name": "Horas De Ronda - Tuna Universitaria",
    "preview_url": "https://p.scdn.co/mp3-preview/0f40b5ed7b84a0219dda141142fadab903ec5b98?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851861a921131cf9eae1fbbc0f3"
  },
  {
    "id": "2UpKLJswFnuZ7TnJERlfei",
    "href": "https://api.spotify.com/v1/tracks/2UpKLJswFnuZ7TnJERlfei",
    "name": "Te quiero dijiste - Tuna Universitaria De Valencia",
    "preview_url": "https://p.scdn.co/mp3-preview/b815a2322de1012e8d795990f5b506718f39c4fe?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514fd525d60ae7b764ab5b926c"
  },
  {
    "id": "2DHlFMqZNLKHkFDSfHIp30",
    "href": "https://api.spotify.com/v1/tracks/2DHlFMqZNLKHkFDSfHIp30",
    "name": "Ruedas (Instrumental) - Remastered - Tuna Universitaria Compostelana",
    "preview_url": "https://p.scdn.co/mp3-preview/f58913d210b04261be66cc1cbbb34d4133a3c730?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e0d53ee6b1bbb594abd3654f"
  },
  {
    "id": "6qNPpdITzV5lpdqmy0Bfjk",
    "href": "https://api.spotify.com/v1/tracks/6qNPpdITzV5lpdqmy0Bfjk",
    "name": "Clavelitos - Remastered - Tuna Universitaria Compostelana",
    "preview_url": "https://p.scdn.co/mp3-preview/aff2a91bcaaa94837a2e2a1d74601bb557ac1391?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e0d53ee6b1bbb594abd3654f"
  },
  {
    "id": "3oS0Rlfnt8fePfiA2dsegi",
    "href": "https://api.spotify.com/v1/tracks/3oS0Rlfnt8fePfiA2dsegi",
    "name": "Idilio - Tuna Imperial de la FES Iztacala-UNAM",
    "preview_url": "https://p.scdn.co/mp3-preview/222d44df5be4639c68f577a5824da33865b706cd?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851d60dc6e3c567581c22cc90da"
  },
  {
    "id": "5KzF0rOU7In5xS6kCHWOpy",
    "href": "https://api.spotify.com/v1/tracks/5KzF0rOU7In5xS6kCHWOpy",
    "name": "Popurrí tuna 2 - Tuna De Ingenieros De Montes",
    "preview_url": "https://p.scdn.co/mp3-preview/140a38fcf69a47e8ce26993d797949343445ac74?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514fd525d60ae7b764ab5b926c"
  },
  {
    "id": "2xYEPBiH4NLRIBedCnQpjv",
    "href": "https://api.spotify.com/v1/tracks/2xYEPBiH4NLRIBedCnQpjv",
    "name": "La Llorona - Estudiantina De La Universidad Autonoma De Queretaro",
    "preview_url": "https://p.scdn.co/mp3-preview/10f3f0fa7275a6e77ee147e9394effb7f0f4dcb9?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048515fe1731b953c55f0b72f81b0"
  },
  {
    "id": "6SXYPB4Zd31YOZMVd4xeXD",
    "href": "https://api.spotify.com/v1/tracks/6SXYPB4Zd31YOZMVd4xeXD",
    "name": "La Paloma - La Tuna",
    "preview_url": "https://p.scdn.co/mp3-preview/9b4c4faadaf6529e844e405a52d9a6a81b65c2ba?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ddbd571f00b1cc413f80d369"
  },
  {
    "id": "0odctk7nKLbJeT1IPFMdxn",
    "href": "https://api.spotify.com/v1/tracks/0odctk7nKLbJeT1IPFMdxn",
    "name": "El Silbidito - Tuna de la Facultad de Derecho de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/4f20425c03ec1b63cfbdf35c66f35122d0af158f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851081396d462015e7bce0d894f"
  },
  {
    "id": "6XJlz2ayZ4II1Q0Ul5ZVdU",
    "href": "https://api.spotify.com/v1/tracks/6XJlz2ayZ4II1Q0Ul5ZVdU",
    "name": "Viaje por España - La Tuna",
    "preview_url": "https://p.scdn.co/mp3-preview/a0f0c1eee123f8e68488413377e43922415ceb79?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851ddbd571f00b1cc413f80d369"
  },
  {
    "id": "34plbuhS3U0s7cdD3pWLJF",
    "href": "https://api.spotify.com/v1/tracks/34plbuhS3U0s7cdD3pWLJF",
    "name": "Aires Andaluces Nº 2 - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
    "preview_url": "https://p.scdn.co/mp3-preview/24229cd34a685d0c8bdcff0f61fe6255ba9ea787?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514788624142222491d13fc531"
  },
  {
    "id": "6eNUAfsqRRXZAqq1H3ZrPK",
    "href": "https://api.spotify.com/v1/tracks/6eNUAfsqRRXZAqq1H3ZrPK",
    "name": "Popurri Navarro - Tuna Decana de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/334bf5bfdf2b53ce5d5a07c1a9b81ff44e5cad07?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485120547e7e32c24dbb2a0af5bb"
  },
  {
    "id": "2fr5b4mst0YJE4hVQd0qOw",
    "href": "https://api.spotify.com/v1/tracks/2fr5b4mst0YJE4hVQd0qOw",
    "name": "La Bikina - Tunas Ao Vivo - Vicitu - Certame Internacional De Tunas Universitárias",
    "preview_url": "https://p.scdn.co/mp3-preview/804a80d521998bcd0efac3c5b368c5f39e007207?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851b977e8555e936283a9b2b90a"
  },
  {
    "id": "5wLWQQgR2eXqk1XkcITblS",
    "href": "https://api.spotify.com/v1/tracks/5wLWQQgR2eXqk1XkcITblS",
    "name": "Jota de la Uva - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/481b31fb8465b812556e981c9fba6e0330fe8176?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048511d90e05a28262fccff22c97b"
  },
  {
    "id": "3rZ4SXhfmqUjB8uXTeIPbT",
    "href": "https://api.spotify.com/v1/tracks/3rZ4SXhfmqUjB8uXTeIPbT",
    "name": "Popurrí tuna 1 - Tuna De Ingenieros De Montes",
    "preview_url": "https://p.scdn.co/mp3-preview/ba3bdf95dfa04b931e2cb5e9f5e52927caa9a880?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514fd525d60ae7b764ab5b926c"
  },
  {
    "id": "4XUpTDYiKrDGk87kvNbtjz",
    "href": "https://api.spotify.com/v1/tracks/4XUpTDYiKrDGk87kvNbtjz",
    "name": "Sin Poderte Hablar - Tuna Femenina Javeriana",
    "preview_url": "https://p.scdn.co/mp3-preview/2e689bb2989d49cbef38f3cbe4a8e37cfaf2fee4?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485134f86d152476a839a4235b91"
  },
  {
    "id": "7MidCEYRnOLaNQbQFL5TLa",
    "href": "https://api.spotify.com/v1/tracks/7MidCEYRnOLaNQbQFL5TLa",
    "name": "La Sirena - La Tuna",
    "preview_url": "https://p.scdn.co/mp3-preview/fa8ae811dd20e520241f97fb10438bf862fd8325?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048516011e84c836653e8bd5eed22"
  },
  {
    "id": "587Ug3fHy4jNi2GgcN4Vcs",
    "href": "https://api.spotify.com/v1/tracks/587Ug3fHy4jNi2GgcN4Vcs",
    "name": "El Pájaro Chogüi - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/9c32f350a32acd8389ea873a9f6e582ace83768f?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851b64781ad4869abd3861b5f5c"
  },
  {
    "id": "6BEQVPFSet8gzu92awTxOf",
    "href": "https://api.spotify.com/v1/tracks/6BEQVPFSet8gzu92awTxOf",
    "name": "España Cañi - Tuna Universitaria",
    "preview_url": "https://p.scdn.co/mp3-preview/9ff4d1ac1221b89d29f534ec41f775a1eb315640?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851861a921131cf9eae1fbbc0f3"
  },
  {
    "id": "5eOckvfB7CNsOqOYh7RQv4",
    "href": "https://api.spotify.com/v1/tracks/5eOckvfB7CNsOqOYh7RQv4",
    "name": "Ronda de Estrellas - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
    "preview_url": "https://p.scdn.co/mp3-preview/299567a80a47ced2bf52f5ed0a02b049c708a588?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514788624142222491d13fc531"
  },
  {
    "id": "4rB9oJ1ykOs5XIsaJ5s5W9",
    "href": "https://api.spotify.com/v1/tracks/4rB9oJ1ykOs5XIsaJ5s5W9",
    "name": "Brindis de la Tuna - Tuna de Derecho y Económicas de la Universidad de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/b6ed868a60e116a1d249e675efb0a1cd9e4454fe?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048510724ef37fb6465753d63c952"
  },
  {
    "id": "4D5P5sKQAXGExaJZIGRnPC",
    "href": "https://api.spotify.com/v1/tracks/4D5P5sKQAXGExaJZIGRnPC",
    "name": "A Mi Me Gusta el Vino - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/60d03ca822e5b4d45d6e20cb7d4f035624917360?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851b4957aa75893349e6ceaf30e"
  },
  {
    "id": "35xWONxVdjiNDLe6GJert8",
    "href": "https://api.spotify.com/v1/tracks/35xWONxVdjiNDLe6GJert8",
    "name": "Clavelitos - Tuna Universitaria",
    "preview_url": "https://p.scdn.co/mp3-preview/2fba39fadc9f5f3f2cc577036a56fdf3a95dfc3c?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851861a921131cf9eae1fbbc0f3"
  },
  {
    "id": "0nHiUkVWDGIsmpXoFXbQnr",
    "href": "https://api.spotify.com/v1/tracks/0nHiUkVWDGIsmpXoFXbQnr",
    "name": "Tuna Compostelana - Tuna de la Escuela de Peritos Industriales de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/2715b8c39f75129b7aa0dfbde16bf5a23cca8e6c?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851eafba6bec870e98ad8eb547f"
  },
  {
    "id": "4g2VFwr4uqMbsk8pN4yyRR",
    "href": "https://api.spotify.com/v1/tracks/4g2VFwr4uqMbsk8pN4yyRR",
    "name": "La Morena de Mi Copla - Remastered - Tuna Universitaria Compostelana",
    "preview_url": "https://p.scdn.co/mp3-preview/3fddeca114e7d9f82b37c00f02fc401a2e5568af?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e0d53ee6b1bbb594abd3654f"
  },
  {
    "id": "4vIRDX7mecyyr3I8LDgrKH",
    "href": "https://api.spotify.com/v1/tracks/4vIRDX7mecyyr3I8LDgrKH",
    "name": "Estrellita Del Sur - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/fe336187c47bdfdf73559e67379cb1a8ba9a4717?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "21Ov3dytI7E0SfRZ3k1n0q",
    "href": "https://api.spotify.com/v1/tracks/21Ov3dytI7E0SfRZ3k1n0q",
    "name": "Aliado Del Tiempo - Cuarentuna De La Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/937b36194e93470aeeb940ef81823b5c78f1c44e?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851f1e994735aaf70b5216dfca0"
  },
  {
    "id": "3zDEBHl3u1VKpzQyI9pnYE",
    "href": "https://api.spotify.com/v1/tracks/3zDEBHl3u1VKpzQyI9pnYE",
    "name": "Agua del Pozo - Tuna de Derecho y Económicas de la Universidad de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/936ba88b86850491abe31c717c4a709a3b92c024?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048510724ef37fb6465753d63c952"
  },
  {
    "id": "349CTQNN7KKDTJmLvcdyEp",
    "href": "https://api.spotify.com/v1/tracks/349CTQNN7KKDTJmLvcdyEp",
    "name": "Guantanamera - Tuna de Derecho y Económicas de la Universidad de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/d8cc9579c069d3af8f17111071fe24327d0f2057?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048510724ef37fb6465753d63c952"
  },
  {
    "id": "3KAczIwvz01YGq6t4zXqY3",
    "href": "https://api.spotify.com/v1/tracks/3KAczIwvz01YGq6t4zXqY3",
    "name": "Guantanamera - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/9f2ecd9ce29f51ad400fb4355d1d74da96625c25?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "3sjCpCwJQYFsNgesLHadaj",
    "href": "https://api.spotify.com/v1/tracks/3sjCpCwJQYFsNgesLHadaj",
    "name": "Tuna de España - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/1f8b073a7e886eeac62368b859d656892665c0e8?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485179a52903726c00b859896203"
  },
  {
    "id": "1qyhRU0yyClAOaEMdQ3Bt4",
    "href": "https://api.spotify.com/v1/tracks/1qyhRU0yyClAOaEMdQ3Bt4",
    "name": "Chotis Madrid - Tuna Decana de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/a1da39bc28164f6f6656c8c3169c84b815ece856?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485120547e7e32c24dbb2a0af5bb"
  },
  {
    "id": "3ioLkFmGF2mGCNKf6JWXUU",
    "href": "https://api.spotify.com/v1/tracks/3ioLkFmGF2mGCNKf6JWXUU",
    "name": "El Payador - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/12bd3039960e0e8c75234a048405edc11aabbbfc?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485131753834aaf7ba0015127ac8"
  },
  {
    "id": "4wG30HMTNso4Jf3ODAyuvn",
    "href": "https://api.spotify.com/v1/tracks/4wG30HMTNso4Jf3ODAyuvn",
    "name": "Angelitos Negros - Rondalla De La Universidad Potosina",
    "preview_url": "https://p.scdn.co/mp3-preview/f4213999166e8747db8c983b9561d44adf9a8a23?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048518b495b902285ac405a8dd4f9"
  },
  {
    "id": "2vFxwMsaFhSP9SlAcU81zU",
    "href": "https://api.spotify.com/v1/tracks/2vFxwMsaFhSP9SlAcU81zU",
    "name": "El Toro Y La Luna - Tuna de Juglares",
    "preview_url": "https://p.scdn.co/mp3-preview/6977a06b0ab1591a5a303669ba697c389b0e5f57?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851097e396f6d64f5b108c68f30"
  },
  {
    "id": "6d9q0smpxNuN8n9gggcrDt",
    "href": "https://api.spotify.com/v1/tracks/6d9q0smpxNuN8n9gggcrDt",
    "name": "Cintas De Mi Capa - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/e52a9f30e9b994a90aa87f697944ce01e8b8f488?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "1ECbBIs8aFzP3CMVPRu2n8",
    "href": "https://api.spotify.com/v1/tracks/1ECbBIs8aFzP3CMVPRu2n8",
    "name": "Viva la tuna - Tuna De La Facultad De Medicina de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/3695de74aa31f29e7a981b53ce03978e4eca5896?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514fd525d60ae7b764ab5b926c"
  },
  {
    "id": "4yxXuuMSefXRBz6r0bRkQQ",
    "href": "https://api.spotify.com/v1/tracks/4yxXuuMSefXRBz6r0bRkQQ",
    "name": "Serenata de Aldea - Remastered - Tuna Universitaria De Córdoba - Rafael Lara",
    "preview_url": "https://p.scdn.co/mp3-preview/873ea8ee5b4a7ea7fbb3d264e8c2f6cbb2643f0a?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514788624142222491d13fc531"
  },
  {
    "id": "5H9n7U0ZTvzEo8H052KMAH",
    "href": "https://api.spotify.com/v1/tracks/5H9n7U0ZTvzEo8H052KMAH",
    "name": "Desiderio - Tuna Universitaria",
    "preview_url": "https://p.scdn.co/mp3-preview/0e98cfe4de14f7490e3b4f42377327c1b8e55a48?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851597ea49800de0511dd04f9db"
  },
  {
    "id": "6CPmgSbnEWZq2PndbT9u4s",
    "href": "https://api.spotify.com/v1/tracks/6CPmgSbnEWZq2PndbT9u4s",
    "name": "Oh Maribel - Tuna de la Facultad de Veterinaria de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/1a354e29d0c9e146e742fef00a1ab32904588910?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851eafba6bec870e98ad8eb547f"
  },
  {
    "id": "0bqy79axj16mKAAGVQbIpb",
    "href": "https://api.spotify.com/v1/tracks/0bqy79axj16mKAAGVQbIpb",
    "name": "Horas De Ronda - Tuna de la Facultad de Farmacia",
    "preview_url": "https://p.scdn.co/mp3-preview/73f79700976d37774e4cdbf5ac5274d90f3557b8?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e529b070f28a45d32296fbad"
  },
  {
    "id": "2gfW4sK7BQ96S7vYP6LSiR",
    "href": "https://api.spotify.com/v1/tracks/2gfW4sK7BQ96S7vYP6LSiR",
    "name": "La Hiedra - Tuna de la UNED de Úbeda",
    "preview_url": "https://p.scdn.co/mp3-preview/fde7da7309f4b0b5561f15412edc6e62c2e72d40?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851634b9a7f584792bff4eb0332"
  },
  {
    "id": "656f7xnuKgA56zpjr6REUR",
    "href": "https://api.spotify.com/v1/tracks/656f7xnuKgA56zpjr6REUR",
    "name": "La Estudiantina Pasa - Remastered - Tuna Hispano Americana del Colegio Mayor \"Nuestra Señora de Guadalupe\" de Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/280b548f65703b30615fe5968fcffc7181543037?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048511d90e05a28262fccff22c97b"
  },
  {
    "id": "38kSGIB2T43v1QiZPEcQMN",
    "href": "https://api.spotify.com/v1/tracks/38kSGIB2T43v1QiZPEcQMN",
    "name": "Española - Tuna de Derecho y Económicas de la Universidad de Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/893a69c936ef4d5f1272713173e5e5a700c09fb3?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048510724ef37fb6465753d63c952"
  },
  {
    "id": "5CFQJn88Qg7jAxaPp9ztVC",
    "href": "https://api.spotify.com/v1/tracks/5CFQJn88Qg7jAxaPp9ztVC",
    "name": "Adelita - Tuna Escuela De Ingenieros Tec. Barcelona",
    "preview_url": "https://p.scdn.co/mp3-preview/1d27dc64e5ccad3e2e41c527f14b832fcb16c456?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048519fca5142429740faee8a5064"
  },
  {
    "id": "4Wgy7TXcGosWPrj07b1AlJ",
    "href": "https://api.spotify.com/v1/tracks/4Wgy7TXcGosWPrj07b1AlJ",
    "name": "Amapola - Tuna Universitaria",
    "preview_url": "https://p.scdn.co/mp3-preview/f47ca1d2499b77e027c507a7b06c0c511b9fc49e?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048518048f37274f38bd543510013"
  },
  {
    "id": "14aC5FcPbcPB8iZIvUAYzF",
    "href": "https://api.spotify.com/v1/tracks/14aC5FcPbcPB8iZIvUAYzF",
    "name": "Triste y Sola - Tuna de Ingenieros de Telecomunicaciones",
    "preview_url": "https://p.scdn.co/mp3-preview/e629d780447d13965e91b1713bbd534155c8f40a?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e6237e0416421b190c5747f6"
  },
  {
    "id": "7ytB5BdTw1OER1zRvhVmLW",
    "href": "https://api.spotify.com/v1/tracks/7ytB5BdTw1OER1zRvhVmLW",
    "name": "Zaragoza (Instrumental) - Remastered - Tuna Universitaria Compostelana",
    "preview_url": "https://p.scdn.co/mp3-preview/554d91d8fd5786d3094cb435e7a19cc4f17d57bd?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851e0d53ee6b1bbb594abd3654f"
  },
  {
    "id": "721Qj7sXT5x41JIa1pqQvP",
    "href": "https://api.spotify.com/v1/tracks/721Qj7sXT5x41JIa1pqQvP",
    "name": "En la Noche Perfumada - Tuna E.T. Peritos Industriales Valencia",
    "preview_url": "https://p.scdn.co/mp3-preview/dcf5cbe864722fea72d6b9d08d5488f8be3078e1?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485161922ee727694cce709368b3"
  },
  {
    "id": "5UVEyzuQBbrfW5GcsxBNzX",
    "href": "https://api.spotify.com/v1/tracks/5UVEyzuQBbrfW5GcsxBNzX",
    "name": "Malaga - Tuna Universitaria de la Ciudad de México",
    "preview_url": "https://p.scdn.co/mp3-preview/f419dce947392064e24c186f6d6f129cf9982172?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d00004851dcb6b9bf403899a60f116122"
  },
  {
    "id": "3LslszxsPGivhf4i2mh8N9",
    "href": "https://api.spotify.com/v1/tracks/3LslszxsPGivhf4i2mh8N9",
    "name": "Tus Ojos - Tuna de Derecho UNAM",
    "preview_url": "https://p.scdn.co/mp3-preview/b198be50a8ed5d4f515e871f443bf3de297c9fac?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048516aa724154300c9ef3ce3de12"
  },
  {
    "id": "075Y7lkkrtkMlvGcwESbky",
    "href": "https://api.spotify.com/v1/tracks/075Y7lkkrtkMlvGcwESbky",
    "name": "Estudiantina Canaria - Tuna Real",
    "preview_url": "https://p.scdn.co/mp3-preview/64d94798034d3f7c713094463f5a277141df8c2e?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d0000485108fddaf14341095796f36eb8"
  },
  {
    "id": "5SOqnbO8kqZ7QTE4rGURqt",
    "href": "https://api.spotify.com/v1/tracks/5SOqnbO8kqZ7QTE4rGURqt",
    "name": "Adelita - Tuna Universitaria De Madrid",
    "preview_url": "https://p.scdn.co/mp3-preview/5dfc51d3e46ce4502945cbeef24107d83e5f0986?cid=adaaf209fb064dfab873a71817029e0d",
    "image": "https://i.scdn.co/image/ab67616d000048514f6cc917eab434c39fc700cf"
  }
];