import { Component, OnInit } from '@angular/core';
import { AlertasService } from '../service/alertas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  constructor(
    private alert: AlertasService,
    private router: Router
  ) { }

  ngOnInit() {

    let token = localStorage.getItem('token')

    if(token == null) {
      this.router.navigate(['/login'])
      this.alert.showAlertInfo('Faça o login antes de entrar no feed.')
    }

    window.scroll(0, 0)
  }

}
