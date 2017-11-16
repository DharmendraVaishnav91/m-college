import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';

@Component({
  selector:'announcement-detail',
  templateUrl:"announcement-detail.html"
})
export class AnnouncementDetail {

  currentAnnouncement:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private photoViewer: PhotoViewer){
    this.currentAnnouncement=navParams.get('announcement');
    console.log("Currnt announcement is=",this.currentAnnouncement);
  }

  openPhotoViewer(imageUrl){
    this.photoViewer.show(imageUrl);
  }
}
