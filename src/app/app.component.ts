import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/froala_editor.pkgd.min.css";
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader} from '@agm/core';
// Import Froala Editor.


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items:any[] = new Array() 
  
  newItemsInDom: any[] = new Array();

  addItem(newItem: any) {
    this.items.push(newItem);
  }
  currentItem = 'Television';
  name: string = '';
  
  setValue() { 
  this.currentItem = 'Nancy';
 }

 users:any[]= ["jahanzaib","Ijaz","amjad"];
 

  declare $ :any
  
  title: string = 'AGM project';
  latitude= 24.9056
  longitud=67.0822
  zoom=12 ;
  address: string | undefined;
  private geoCoder!: google.maps.Geocoder;

  @ViewChild('search')
  public searchElementRef!: ElementRef;

  public options: Object = {
    placeholder: "Edit Me",
    events : {
      'froalaEditor.focus' : function(e: any, editor: { selection: { get: () => any; }; }) {
        console.log(editor.selection.get());
      }
    }
  }
  public optionss: Object = {
    charCounterCount: true,
    toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
  };
   
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }


  ngOnInit() {

    console.log(this.users[2]);
    //load Places Autocomplete
    // this.mapsAPILoader.load().then(() => {
    //   this.setCurrentLocation();
    //   this.geoCoder = new google.maps.Geocoder;

    //   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
    //   autocomplete.addListener("place_changed", () => {
    //     this.ngZone.run(() => {
    //       //get the place result
    //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();

    //       //verify result
    //       if (place.geometry === undefined || place.geometry === null) {
    //         return;
    //       }

    //       //set latitude, longitude and zoom
    //       this.latitude = place.geometry.location.lat();
    //       this.longitud = place.geometry.location.lng();
    //       this.zoom = 12;
    //     });
    //   });
    // });
  }
//
  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitud = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitud);
      });
    }
  }

  getAddress(latitude: number  , longitude: number ) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

}