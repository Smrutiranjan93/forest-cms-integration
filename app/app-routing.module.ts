import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './common/about/about.component';
import { AnugulComponent } from './common/anugul/anugul.component';
import { BambooComponent } from './common/bamboo/bamboo.component';
import { BodyComponent } from './common/body/body.component';
import { ContactusComponent } from './common/contactus/contactus.component';
import { DispositionComponent } from './common/disposition/disposition.component';
import { BhadrakreportsComponent } from './common/inner1/bhadrak/bhadrakreports/bhadrakreports.component';
import { BhadrakwebdirectoryComponent } from './common/inner1/bhadrak/bhadrakwebdirectory/bhadrakwebdirectory.component';
import { ChandakareportsComponent } from './common/inner1/chandakaDFO/chandakareports/chandakareports.component';
import { ChandakawebdirectoryComponent } from './common/inner1/chandakaDFO/chandakawebdirectory/chandakawebdirectory.component';
import { ChillikawebdirectoryComponent } from './common/inner1/chillikaDFO/chillikawebdirectory/chillikawebdirectory.component';
import { CitywebdirectoryComponent } from './common/inner1/cityDFO/citywebdirectory/citywebdirectory.component';
import { WebdirectoryComponent } from './common/inner1/common/webdirectory/webdirectory.component';
import { KhurdhawebdirectoryComponent } from './common/inner1/khurdhaDFO/khurdhawebdirectory/khurdhawebdirectory.component';
import { MangrovewebdirectoryComponent } from './common/inner1/mangroveDFO/mangrovewebdirectory/mangrovewebdirectory.component';
import { NayagarhwebdirectoryComponent } from './common/inner1/nayagarhDFO/nayagarhwebdirectory/nayagarhwebdirectory.component';
import { PuriwebdirectoryComponent } from './common/inner1/puriDFO/puriwebdirectory/puriwebdirectory.component';
import { ReportsComponent } from './common/inner1/reports/reports.component';
import { RTIComponent } from './common/inner1/rti/rti.component';
import { KenduleafComponent } from './common/kenduleaf/kenduleaf.component';
import { MasterPlanComponent } from './common/master-plan/master-plan.component';
import { OrganogramComponent } from './common/organogram/organogram.component';
import { PhotogalleryComponent } from './common/photogallery/photogallery.component';
import { PlantationComponent } from './common/plantation/plantation.component';
import { ResearchComponent } from './common/research/research.component';
import { SiteclearanceComponent } from './common/siteclearance/siteclearance.component';
import { StockavailbilityComponent } from './common/stockavailbility/stockavailbility.component';
import { TenderComponent } from './common/tender/tender.component';
import { TenderviewComponent } from './common/tenderview/tenderview.component';
import { TimberComponent } from './common/timber/timber.component';
import { TimberfirewoodComponent } from './common/timberfirewood/timberfirewood.component';
import { WildlifeComponent } from './common/wildlife/wildlife.component';
import { GrivanceComponent } from './grivance/grivance.component';
import { LoginComponent } from './login/login.component';
import { ServiceRulesComponent } from './common/service-rules/service-rules.component';
import { EnvironmentProtectionComponent } from './common/environment-protection/environment-protection.component';
import { WaterPollutionComponent } from './common/water-pollution/water-pollution.component';
import { AirPollutionComponent } from './common/air-pollution/air-pollution.component';
import { NoisePollutionComponent } from './common/noise-pollution/noise-pollution.component';
import { WasteManagementComponent } from './common/waste-management/waste-management.component';
import { OfsJbListComponent } from './common/ofs-jb-list/ofs-jb-list.component';
import { ForestComponent } from './common/forest/forest.component';
import { EnvironmentForestComponent } from './common/environment-forest/environment-forest.component';
import { EstablishmentComponent } from './common/establishment/establishment.component';
import { ForestNotificationComponent } from './common/forest-notification/forest-notification.component';
import { WildlifeForestComponent } from './common/wildlife-forest/wildlife-forest.component';
import { EnvironmentNotificationComponent } from './common/environment-notification/environment-notification.component';
import { EstablishmentNotificationComponent } from './common/establishment-notification/establishment-notification.component';
import { WildlifeNotificationComponent } from './common/wildlife-notification/wildlife-notification.component';
import { RangeOfficerComponent } from './common/range-officer/range-officer.component';
import { GradationListComponent } from './common/gradation-list/gradation-list.component';
import { DfoComponent } from './common/dfo/dfo.component';
import { NotifyForestComponent } from './common/notify-forest/notify-forest.component';
import { OfdcComponent } from './common/ofdc/ofdc.component';
import { OfsSbListComponent } from './common/ofs-sb-list/ofs-sb-list.component';
import { OthersForestComponent } from './common/others-forest/others-forest.component';
import { RccfComponent } from './common/rccf/rccf.component';
import { BhadrakComponent } from './common/division/bhadrak/bhadrak.component';
import { FinanceComponent } from './common/finance/finance.component';
import { BhadrakrtiComponent } from './common/inner1/bhadrak/bhadrakrti/bhadrakrti.component';
import { ChandakartiComponent } from './common/inner1/chandakaDFO/chandakarti/chandakarti.component';
import { PurirtiComponent } from './common/inner1/puriDFO/purirti/purirti.component';
import { NayagarhrtiComponent } from './common/inner1/nayagarhDFO/nayagarhrti/nayagarhrti.component';
import { MangrovertiComponent } from './common/inner1/mangroveDFO/mangroverti/mangroverti.component';
import { KhurdhartiComponent } from './common/inner1/khurdhaDFO/khurdharti/khurdharti.component';
import { CityrtiComponent } from './common/inner1/cityDFO/cityrti/cityrti.component';
import { ChillikartiComponent } from './common/inner1/chillikaDFO/chillikarti/chillikarti.component';
import { LegalClearanceComponent } from './common/legal-clearance/legal-clearance.component';
import { WildlifeClearanceComponent } from './common/wildlife-clearance/wildlife-clearance.component';
import { ForestClearanceComponent } from './common/forest-clearance/forest-clearance.component';
import { OthersClearanceComponent } from './common/others-clearance/others-clearance.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path:'aboutus',
    component:AboutComponent
  },
  {
    path:'anugul',
    component:AnugulComponent
  },
  {
    path:'bamboo',
    component:BambooComponent
  },
  {
    path:'contact',
    component: ContactusComponent
  },
  {
    path:'plan',
    component:MasterPlanComponent
  },
  {
    path:'organogram',
    component:OrganogramComponent
  },
  {
    path:'photos',
    component:PhotogalleryComponent
  },
  {
    path:'plantation',
    component:PlantationComponent
  },
  {
    path:'research',
    component:ResearchComponent
  },
  {
    path:'roundtimber',
    component:TimberComponent
  },
  {
    path:'siteclearance',
    component:SiteclearanceComponent
  },
  {
    path:'stockavailability',
    component:StockavailbilityComponent
  },
  {
    path:'tender',
    component:TenderComponent
  },
  {
    path:'tenderfiles',
    component:TenderviewComponent
  },
  {
    path:'timberfirewood',
    component:TimberfirewoodComponent
  },
  {
    path:'wildlife',
    component:WildlifeComponent
  },
  {
    path:'kenduleaf',
    component:KenduleafComponent
  },
  {
    path:'service-rules',
    component:ServiceRulesComponent
  },
  {
    path:'Organogram',
    component:OrganogramComponent
  },
  {
    path:'webdirectory',
    component:WebdirectoryComponent
  },
  {
    path:'bhadrakwebdirectory',
   component:BhadrakwebdirectoryComponent
  },
  {
    path:'Mangrovewebdirectory',
    component:MangrovewebdirectoryComponent
  },
  {
    path:'Puriwebdirectory',
    component:PuriwebdirectoryComponent
  },
  {
    path:'Chandakawebdirectory',
    component:ChandakawebdirectoryComponent
  },
  {
    path:'Chillikawebdirectory',
    component:ChillikawebdirectoryComponent
  },
  {
    path:'Khurdhawebdirectory',
    component:KhurdhawebdirectoryComponent
  },
  {
    path:'Nayagarhwebdirectory',
    component:NayagarhwebdirectoryComponent
  },
  {
    path:'Citywebdirectory',
    component:CitywebdirectoryComponent
  },
  {
    path:'reports',
    component:ReportsComponent
  },
  {
    path:'rti',
    component:RTIComponent
  },
  {
    path:'Bhadrakreports',
    component:BhadrakreportsComponent
  },
  {
    path:'Bhadrakrti',
    component:BhadrakrtiComponent
  },
  {
    path:'Chandakareports',
    component:ChandakareportsComponent
  },
  {
    path:'chandakarti',
    component:ChandakartiComponent
  },
  {
    path:'chillikarti',
    component:ChillikartiComponent
  },
  {
    path:'cityrti',
    component:CityrtiComponent
  },
  {
    path:'khurdharti',
    component:KhurdhartiComponent
  },
  {
    path:'mangroverti',
    component:MangrovertiComponent
  },
  {
    path:'nayagarhrti',
    component:NayagarhrtiComponent
  },
  {
    path:'purirti',
    component:PurirtiComponent
  },
  {
    path:'disposition',
    component:DispositionComponent
  },{
  

    path:'Grievance',
    component:GrivanceComponent
  },

  // {
  //   path:'Bhadrakreports',
  //   component:BhadrakreportsComponent
  // },
  // {
  //   path:'Bhadrakreports',
  //   component:BhadrakreportsComponent
  // },
  // {
  //   path:'Bhadrakreports',
  //   component:BhadrakreportsComponent
  // },
  // {
  //   path:'Bhadrakreports',
  //   component:BhadrakreportsComponent
  // }
  {
    path:'environment-protection',
    component:EnvironmentProtectionComponent
  },
  {
    path:'water-pollution',
    component:WaterPollutionComponent
  },
  {
    path:'air-pollution',
    component:AirPollutionComponent
  },
  {
    path:'noise-pollution',
    component:NoisePollutionComponent
  },
  {
    path:'waste-management',
    component:WasteManagementComponent
  },
  {
    path:'ofs-jb-list',
    component:OfsJbListComponent
  },
  {
    path:'ofs-sb-list',
    component:OfsSbListComponent
  },
  {
    path:'ofdc',
    component: OfdcComponent
  },
  {
    path:'rccf',
    component: RccfComponent
  },
  {
    path:'dfo',
    component: DfoComponent
  },
  {
    path:'range-officer',
    component: RangeOfficerComponent
  },
  {
    path:'gradation-list',
    component: GradationListComponent
  },
  {
    path:'finance',
    component: FinanceComponent
  },
{
    path:'forest',
    component:ForestComponent
  },
  {
    path:'environment-forest',
    component:EnvironmentForestComponent
  },
  {
    path:'establishment',
    component:EstablishmentComponent
  },
  {
    path:'wildlifeforest',
    component:WildlifeForestComponent
  },
  {
    path:'forest-notification',
    component:ForestNotificationComponent
  },
  {
    path:'environment-notification',
    component:EnvironmentNotificationComponent
  },
  {
    path:'establishment-notification',
    component:EstablishmentNotificationComponent
  },
  {
    path:'wildlife-notification',
    component:WildlifeNotificationComponent
  },
  {
    path:'forest-other',
    component:OthersForestComponent
  },
  {
    path:'notify-other',
    component:NotifyForestComponent
  },
  
  {
    path:'rccf',
    component:RccfComponent
  },
  {
    path:'bhadrak',
    component:BhadrakComponent
  },
  {
    path:'dfo',
    component:DfoComponent
  },
  {
    path:'legal-clearance',
    component:LegalClearanceComponent
  },
  {
    path:'wildlife-clearance',
    component:WildlifeClearanceComponent
  },
  {
    path:'forest-clearance',
    component:ForestClearanceComponent
  },
  {
    path:'others-clearance',
    component:OthersClearanceComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
