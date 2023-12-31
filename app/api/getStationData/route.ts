import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  let dataToSend:any[] = []
  const stationId = req.nextUrl.searchParams.get("stationId");
  const stationsToGet:any[] = stationId?.includes(',') ? stationId?.split(",") : [stationId]
  async function StationData(){
    for (const station in stationsToGet) {
      
      const getStationData:Response = await fetch(`https://precoscombustiveis.dgeg.gov.pt/api/PrecoComb/GetDadosPostoMapa?id=${stationsToGet[station]}&f=json`)
      const  stationData:any =await getStationData.json()
      
     dataToSend.push({address:{name:stationData.resultado.Nome, address:stationData.resultado.Morada.Morada}, gasTypes: stationData.resultado.Combustiveis})
  }
  return dataToSend
}
  
  await StationData()
  return NextResponse.json(dataToSend);
}
