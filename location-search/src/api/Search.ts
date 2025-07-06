export const serach = async(term:string) => {
 const res = await fetch(`https://nominatim.openstreetmap.org/Search?q=${term}&formate=geojson&addressdetails=1&layer=address&limit=5`);
 const data = await res.json();
 return data;
}