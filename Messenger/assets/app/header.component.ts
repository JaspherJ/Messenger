import {Component} from "@angular/core";
/**
 * Created by Jazz-Pc on 6/18/2017.
 */

@Component({
    selector:'app-header',
    templateUrl:`
<header class="row">
    <nav class="col-md-8 col-md-offset-2">
      <ul class="nav nav-pills">
         <li routerLinkActive="active"><a routerLink="/messages" >Messenger</a></li>
         <li routerLinkActive="active"><a routerLink="/auth">Authentication</a></li>
      </ul>
    </nav>
</header> 
    `

})
export class HeaderComponent{



}