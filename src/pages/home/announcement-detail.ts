import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector:'announcement-detail',
  templateUrl:"announcement-detail.html"
})
export class AnnouncementDetail {

  currentAnnouncement:any;
  constructor(public navCtrl: NavController, public navParams: NavParams){
    this.currentAnnouncement=navParams.get('announcement');
    console.log("Currnt announcement is=",this.currentAnnouncement);
  }

}
