import { LICENSE_TYPES } from "@/lib/content";
import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";

export default function LicensingPage() {
  return <>
    <PageHeader eyebrow="License IP" title="Licensing options" description="Explore the license families shown in the SHIP wireframes. Specific terms belong to each entry and its selected license." />
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-4">
      {LICENSE_TYPES.map((license) => <Card key={license.id} id={license.id} className="p-6">
        <p className="text-xs text-muted mb-3">{license.tag}</p>
        <h2 className="font-serif text-2xl mb-3">{license.name}</h2>
        <p className="text-muted text-sm leading-relaxed">{license.description}</p>
      </Card>)}
    </section>
  </>;
}
