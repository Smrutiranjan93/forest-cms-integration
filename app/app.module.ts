import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './common/body/body.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './common/about/about.component';
import { AnugulComponent } from './common/anugul/anugul.component';
import { BambooComponent } from './common/bamboo/bamboo.component';
import { ContactusComponent } from './common/contactus/contactus.component';
import { GrivanceComponent } from './grivance/grivance.component';
import { MasterPlanComponent } from './common/master-plan/master-plan.component';
import { OrganogramComponent } from './common/organogram/organogram.component';
import { PhotogalleryComponent } from './common/photogallery/photogallery.component';
import { PlantationComponent } from './common/plantation/plantation.component';
import { ResearchComponent } from './common/research/research.component';
import { TimberComponent } from './common/timber/timber.component';
import { SiteclearanceComponent } from './common/siteclearance/siteclearance.component';
import { StockavailbilityComponent } from './common/stockavailbility/stockavailbility.component';
import { TenderComponent } from './common/tender/tender.component';
import { TenderviewComponent } from './common/tenderview/tenderview.component';
import { TimberfirewoodComponent } from './common/timberfirewood/timberfirewood.component';
import { WildlifeComponent } from './common/wildlife/wildlife.component';
import { KenduleafComponent } from './common/kenduleaf/kenduleaf.component';
import { ServiceRulesComponent } from './common/service-rules/service-rules.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import { NgSearchFilterModule } from 'ng-search-filter';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BhadrakwebdirectoryComponent } from './common/inner1/bhadrak/bhadrakwebdirectory/bhadrakwebdirectory.component';
import { ChandakareportsComponent } from './common/inner1/chandakaDFO/chandakareports/chandakareports.component';
import { ChandakawebdirectoryComponent } from './common/inner1/chandakaDFO/chandakawebdirectory/chandakawebdirectory.component';
import { ChillikawebdirectoryComponent } from './common/inner1/chillikaDFO/chillikawebdirectory/chillikawebdirectory.component';
import { BhadrakreportsComponent } from './common/inner1/bhadrak/bhadrakreports/bhadrakreports.component';
import { CitywebdirectoryComponent } from './common/inner1/cityDFO/citywebdirectory/citywebdirectory.component';
import { WebdirectoryComponent } from './common/inner1/common/webdirectory/webdirectory.component';
import { KhurdhawebdirectoryComponent } from './common/inner1/khurdhaDFO/khurdhawebdirectory/khurdhawebdirectory.component';
import { MangrovewebdirectoryComponent } from './common/inner1/mangroveDFO/mangrovewebdirectory/mangrovewebdirectory.component';
import { NayagarhwebdirectoryComponent } from './common/inner1/nayagarhDFO/nayagarhwebdirectory/nayagarhwebdirectory.component';
import { PuriwebdirectoryComponent } from './common/inner1/puriDFO/puriwebdirectory/puriwebdirectory.component';
import { ReportsComponent } from './common/inner1/reports/reports.component';
import { RTIComponent } from './common/inner1/rti/rti.component';
import { DispositionComponent } from './common/disposition/disposition.component';
import { EnvironmentProtectionComponent } from './common/environment-protection/environment-protection.component';
import { WaterPollutionComponent } from './common/water-pollution/water-pollution.component';
import { AirPollutionComponent } from './common/air-pollution/air-pollution.component';
import { NoisePollutionComponent } from './common/noise-pollution/noise-pollution.component';
import { WasteManagementComponent } from './common/waste-management/waste-management.component';
import { OfsJbListComponent } from './common/ofs-jb-list/ofs-jb-list.component';
import { ForestComponent } from './common/forest/forest.component';
import { EnvironmentForestComponent } from './common/environment-forest/environment-forest.component';
import { EstablishmentComponent } from './common/establishment/establishment.component';
import { WildlifeForestComponent } from './common/wildlife-forest/wildlife-forest.component';
import { ForestNotificationComponent } from './common/forest-notification/forest-notification.component';
import { EnvironmentNotificationComponent } from './common/environment-notification/environment-notification.component';
import { EstablishmentNotificationComponent } from './common/establishment-notification/establishment-notification.component';
import { WildlifeNotificationComponent } from './common/wildlife-notification/wildlife-notification.component';
import { DfoComponent } from './common/dfo/dfo.component';
import { GradationListComponent } from './common/gradation-list/gradation-list.component';
import { NotifyForestComponent } from './common/notify-forest/notify-forest.component';
import { OfdcComponent } from './common/ofdc/ofdc.component';
import { OfsSbListComponent } from './common/ofs-sb-list/ofs-sb-list.component';
import { OthersForestComponent } from './common/others-forest/others-forest.component';
import { RangeOfficerComponent } from './common/range-officer/range-officer.component';
import { RccfComponent } from './common/rccf/rccf.component';
import { DivisionComponent } from './common/division/division.component';
import { BhadrakComponent } from './common/division/bhadrak/bhadrak.component';
import { MangroveForestComponent } from './common/division/mangrove-forest/mangrove-forest.component';
import { PuriComponent } from './common/division/puri/puri.component';
import { ChandakaComponent } from './common/division/chandaka/chandaka.component';
import { ChilikaComponent } from './common/division/chilika/chilika.component';
import { KhurdaComponent } from './common/division/khurda/khurda.component';
import { NayagarhComponent } from './common/division/nayagarh/nayagarh.component';
import { CityForestComponent } from './common/division/city-forest/city-forest.component';
import { AcheivementComponent } from './common/acheivement/acheivement.component';
import { AdvertisementComponent } from './common/advertisement/advertisement.component';
import { SchemesComponent } from './common/schemes/schemes.component';
import { FinanceComponent } from './common/finance/finance.component';
import { BhadrakrtiComponent } from './common/inner1/bhadrak/bhadrakrti/bhadrakrti.component';
import { ChandakartiComponent } from './common/inner1/chandakaDFO/chandakarti/chandakarti.component';
import { ChillikartiComponent } from './common/inner1/chillikaDFO/chillikarti/chillikarti.component';
import { CityrtiComponent } from './common/inner1/cityDFO/cityrti/cityrti.component';
import { KhurdhartiComponent } from './common/inner1/khurdhaDFO/khurdharti/khurdharti.component';
import { MangrovertiComponent } from './common/inner1/mangroveDFO/mangroverti/mangroverti.component';
import { NayagarhrtiComponent } from './common/inner1/nayagarhDFO/nayagarhrti/nayagarhrti.component';
import { PurirtiComponent } from './common/inner1/puriDFO/purirti/purirti.component';
import { ChillikareportsComponent } from './common/inner1/chillikaDFO/chillikareports/chillikareports.component';
import { CityreportsComponent } from './common/inner1/cityDFO/cityreports/cityreports.component';
import { KhurdhareprtsComponent } from './common/inner1/khurdhaDFO/khurdhareprts/khurdhareprts.component';
import { MangrovereportsComponent } from './common/inner1/mangroveDFO/mangrovereports/mangrovereports.component';
// import { NayagarhreportsComponent } from './common/inner1/nayagrhDFO/nayagarhreports/nayagarhreports.component';
import { PurireportsComponent } from './common/inner1/puriDFO/purireports/purireports.component';
import { NayagarhreportsComponent } from './common/inner1/nayagarhDFO/nayagarhreports/nayagarhreports.component';
import { LegalClearanceComponent } from './common/legal-clearance/legal-clearance.component';
import { ForestClearanceComponent } from './common/forest-clearance/forest-clearance.component';
import { WildlifeClearanceComponent } from './common/wildlife-clearance/wildlife-clearance.component';
import { OthersClearanceComponent } from './common/others-clearance/others-clearance.component';



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    AnugulComponent,
    BambooComponent,
    ContactusComponent,
    GrivanceComponent,
    MasterPlanComponent,
    OrganogramComponent,
    PhotogalleryComponent,
    PlantationComponent,
    ResearchComponent,
    TimberComponent,
    SiteclearanceComponent,
    StockavailbilityComponent,
    TenderComponent,
    TenderviewComponent,
    TimberfirewoodComponent,
    WildlifeComponent,
    KenduleafComponent,
    ServiceRulesComponent,
    BhadrakreportsComponent,
    BhadrakwebdirectoryComponent,
    ChandakareportsComponent,
    ChandakawebdirectoryComponent,
    ChillikawebdirectoryComponent,
    CitywebdirectoryComponent,
    WebdirectoryComponent,
    KhurdhawebdirectoryComponent,
    MangrovewebdirectoryComponent,
    NayagarhwebdirectoryComponent,
    PuriwebdirectoryComponent,
    ReportsComponent,
    RTIComponent,
    DispositionComponent,
    EnvironmentProtectionComponent,
    WaterPollutionComponent,
    AirPollutionComponent,
    NoisePollutionComponent,
    WasteManagementComponent,
    OfsJbListComponent,
    ForestComponent,
    EnvironmentForestComponent,
    EstablishmentComponent,
    WildlifeForestComponent,
    ForestNotificationComponent,
    EnvironmentNotificationComponent,
    EstablishmentNotificationComponent,
    WildlifeNotificationComponent,
    WasteManagementComponent,
    OfsSbListComponent,
    OfdcComponent,
    RccfComponent,
    DfoComponent,
    RangeOfficerComponent,
    GradationListComponent,
    OthersForestComponent,
    NotifyForestComponent,
    DivisionComponent,
    BhadrakComponent,
    MangroveForestComponent,
    PuriComponent,
    ChandakaComponent,
    ChilikaComponent,
    KhurdaComponent,
    NayagarhComponent,
    CityForestComponent,
    AcheivementComponent,
    AdvertisementComponent,
    SchemesComponent,
    FinanceComponent,
    BhadrakrtiComponent,
    ChandakartiComponent,
    ChillikartiComponent,
    CityrtiComponent,
    KhurdhartiComponent,
    MangrovertiComponent,
    NayagarhrtiComponent,
    PurirtiComponent,
    ChillikareportsComponent,
    CityreportsComponent,
    KhurdhareprtsComponent,
    MangrovereportsComponent,
    NayagarhreportsComponent,
    PurireportsComponent,
    LegalClearanceComponent,
    ForestClearanceComponent,
    WildlifeClearanceComponent,
    OthersClearanceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    // NgSearchFilterModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
