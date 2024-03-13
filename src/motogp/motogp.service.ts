import { Injectable } from '@nestjs/common';

@Injectable()
export class MotogpService {

    public motogpChampions: Record<number, string> = {
        1949: "Leslie GRAHAM",
        1950: "Umberto MASETTI",
        1951: "Geoff DUKE",
        1952: "Umberto MASETTI",
        1953: "Geoff DUKE",
        1954: "Geoff DUKE",
        1955: "Geoff DUKE",
        1956: "John SURTEES",
        1957: "Libero LIBERATI",
        1958: "John SURTEES",
        1959: "John SURTEES",
        1960: "John SURTEES",
        1961: "Gary HOCKING",
        1962: "Mike HAILWOOD",
        1963: "Mike HAILWOOD",
        1964: "Mike HAILWOOD",
        1965: "Mike HAILWOOD",
        1966: "Giacomo AGOSTINI",
        1967: "Giacomo AGOSTINI",
        1968: "Giacomo AGOSTINI",
        1969: "Giacomo AGOSTINI",
        1970: "Giacomo AGOSTINI",
        1971: "Giacomo AGOSTINI",
        1972: "Giacomo AGOSTINI",
        1973: "Phil READ",
        1974: "Phil READ",
        1975: "Giacomo AGOSTINI",
        1976: "Barry SHEENE",
        1977: "Barry SHEENE",
        1978: "Kenny ROBERTS",
        1979: "Kenny ROBERTS",
        1980: "Kenny ROBERTS",
        1981: "Marco LUCCHINELLI",
        1982: "Franco UNCINI",
        1983: "Freddie SPENCER",
        1984: "Eddie LAWSON",
        1985: "Freddie SPENCER",
        1986: "Eddie LAWSON",
        1987: "Wayne GARDNER",
        1988: "Eddie LAWSON",
        1989: "Eddie LAWSON",
        1990: "Wayne RAINEY",
        1991: "Wayne RAINEY",
        1992: "Wayne RAINEY",
        1993: "Kevin SCHWANTZ",
        1994: "Michael DOOHAN",
        1995: "Michael DOOHAN",
        1996: "Michael DOOHAN",
        1997: "Michael DOOHAN",
        1998: "Michael DOOHAN",
        1999: "Alex CRIVILLE",
        2000: "Kenny ROBERTS Jr.",
        2001: "Valentino ROSSI",
        2002: "Valentino ROSSI",
        2003: "Valentino ROSSI",
        2004: "Valentino ROSSI",
        2005: "Valentino ROSSI",
        2006: "Nick HAYDEN",
        2007: "Casey STONER",
        2008: "Valentino ROSSI",
        2009: "Valentino ROSSI",
        2010: "Jorge LORENZO",
        2011: "Casey STONER",
        2012: "Jorge LORENZO",
        2013: "Marc MARQUEZ",
        2014: "Marc MARQUEZ",
        2015: "Jorge LORENZO",
        2016: "Marc MARQUEZ",
        2017: "Marc MARQUEZ",
        2018: "Marc MARQUEZ",
        2019: "Marc MARQUEZ",
        2020: "Joan MIR",
        2021: "Fabio QUARTARARO",
        2022: "Francesco BAGNAIA",
        2023: "Francesco BAGNAIA"
      };

    getMotoGPChampion(year: number): string {
        if(!this.motogpChampions[year]){
          return "No championship this year.";
        }
    
        return this.motogpChampions[year];
    }

    getAll(): Record<number, string>{
        return this.motogpChampions;
    }
}
