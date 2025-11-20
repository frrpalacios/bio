/**
 * SchemaScript - Componente para renderizar schemas JSON-LD
 * 
 * Renderiza schemas diretamente como elementos <script> no JSX,
 * garantindo que sejam incluídos no HTML estático (SSG).
 * 
 * Esta abordagem funciona perfeitamente com Next.js App Router e
 * garante que crawlers (Google, Bing, IAs) possam ler os schemas.
 */

import { 
  getPersonSchemaPT, 
  getPersonSchemaEN, 
  getPersonSchemaES,
  getOrganizationSchema 
} from '@/lib/schema-helpers';

interface SchemaScriptProps {
  locale: string;
}

export function SchemaScript({ locale }: SchemaScriptProps) {
  // Selecionar schema Person baseado no locale
  let personSchema;
  switch (locale) {
    case 'en':
      personSchema = getPersonSchemaEN();
      break;
    case 'es':
      personSchema = getPersonSchemaES();
      break;
    default:
      personSchema = getPersonSchemaPT();
  }
  
  const organizationSchema = getOrganizationSchema();
  
  return (
    <>
      {/* Schema Person - Renderizado diretamente no HTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      
      {/* Schema Organization - Renderizado diretamente no HTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </>
  );
}
