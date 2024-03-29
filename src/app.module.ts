import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { F1wdcModule } from './f1wdc/f1wdc.module';
import { MotogpModule } from './motogp/motogp.module';

let f1WorldDriversChampions: Record<number, string> = {
  1950: "Giuseppe FARINA",
  1951: "Juan Manuel FANGIO",
  1952: "Alberto ASCARI",
  1953: "Alberto ASCARI",
  1954: "Juan Manuel FANGIO",
  1955: "Juan Manuel FANGIO",
  1956: "Juan Manuel FANGIO",
  1957: "Juan Manuel FANGIO",
  1958: "Mike HAWTHORN",
  1959: "Jack BRABHAM",
  1960: "Jack BRABHAM",
  1961: "Phil HILL",
  1962: "Graham HILL",
  1963: "Jim CLARK",
  1964: "John SURTEES",
  1965: "Jim CLARK",
  1966: "Jack BRABHAM",
  1967: "Denny HULME",
  1968: "Graham HILL",
  1969: "Jackie STEWART",
  1970: "Jochen RINDT",
  1971: "Jackie STEWART",
  1972: "Emerson FITTIPALDI",
  1973: "Jackie STEWART",
  1974: "Emerson FITTIPALDI",
  1975: "Niki LAUDA",
  1976: "James HUNT",
  1977: "Niki LAUDA",
  1978: "Mario ANDRETTI",
  1979: "Jody SCHECKTER",
  1980: "Alan JONES",
  1981: "Nelson PIQUET",
  1982: "Keke ROSBERG",
  1983: "Nelson PIQUET",
  1984: "Niki LAUDA",
  1985: "Alain PROST",
  1986: "Alain PROST",
  1987: "Nelson PIQUET",
  1988: "Ayrton SENNA",
  1989: "Alain PROST",
  1990: "Ayrton SENNA",
  1991: "Ayrton SENNA",
  1992: "Nigel MANSELL",
  1993: "Alain PROST",
  1994: "Michael SCHUMACHER",
  1995: "Michael SCHUMACHER",
  1996: "Damon HILL",
  1997: "Jacques VILLENEUVE",
  1998: "Mika HAKKINEN",
  1999: "Mika HAKKINEN",
  2000: "Michael SCHUMACHER",
  2001: "Michael SCHUMACHER",
  2002: "Michael SCHUMACHER",
  2003: "Michael SCHUMACHER",
  2004: "Michael SCHUMACHER",
  2005: "Fernando ALONSO",
  2006: "Fernando ALONSO",
  2007: "Kimi RAIKKONEN",
  2008: "Lewis HAMILTON",
  2009: "Jenson BUTTON",
  2010: "Sebastian VETTEL",
  2011: "Sebastian VETTEL",
  2012: "Sebastian VETTEL",
  2013: "Sebastian VETTEL",
  2014: "Lewis HAMILTON",
  2015: "Lewis HAMILTON",
  2016: "Nico ROSBERG",
  2017: "Lewis HAMILTON",
  2018: "Lewis HAMILTON",
  2019: "Lewis HAMILTON",
  2020: "Lewis HAMILTON",
  2021: "Max VERSTAPPEN",
  2022: "Max VERSTAPPEN",
  2023: "Max VERSTAPPEN"
};

@Module({
  imports: [F1wdcModule.register(f1WorldDriversChampions), MotogpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(AppController);
  }
}
