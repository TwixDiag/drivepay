export async function GET(req: Request) {
    const response1 = await fetch('https://www.vilnius-airport.lt/lt/pries-skrydi/skrydziu-informacija/skrydziu-tvarkarastis?direction=arrival&destination=&date-from=2025-04-08&date-to=2025-04-08&page=1');
    const response2 = await fetch('https://www.vilnius-airport.lt/lt/pries-skrydi/skrydziu-informacija/skrydziu-tvarkarastis?direction=arrival&destination=&date-from=2025-04-08&date-to=2025-04-08&page=2');
    const html1 = await response1.text();
    const html2 = await response2.text();
    const htmlAll = html1 + html2;
    return new Response(htmlAll, { status: 200 });
}