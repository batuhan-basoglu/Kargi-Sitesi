import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-iletisim',
  templateUrl: './iletisim.component.html',
  styleUrls: ['./iletisim.component.css']
})
export class IletisimComponent implements OnInit{
  lat = 37.00850309346716;
  lng = 27.32525836435135;

  FormData: UntypedFormGroup;
  constructor(private builder: UntypedFormBuilder, private contact: ServicesService) { }

  ngOnInit() {
    this.FormData = this.builder.group({
      Name: new UntypedFormControl('', [Validators.required]),
      Email: new UntypedFormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Phone: new UntypedFormControl('', [Validators.pattern("^[0-9]*$")]),
      Message: new UntypedFormControl('', [Validators.required])
    });
  }

  get Name() {return this.FormData.get('Name'); }
  get Email() {return this.FormData.get('Email'); }
  get Phone() {return this.FormData.get('Phone'); }
  get Message() {return this.FormData.get('Message'); }

  onSubmit(FormData) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'https://mailthis.to/confirm'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
}
