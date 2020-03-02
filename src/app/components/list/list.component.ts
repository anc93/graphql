import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const axios = require('axios');
const githubUrl = 'https://api.github.com/graphql'
const token = ''
const oauth = { Authorization: 'bearer ' + token }
const queryA = '{' +
  'viewer { ' +
  'login ' +
  '}' +
  '}';
const queryB = '{' +
  'repositoryOwner (login:"anc93") { ' +
  'login ' +
  'url,' +
  'avatarUrl' +
  '}' +
  '}';
const queryC = '{' +
  'repositoryOwner (login:"anc93") { ' +
  'login ' +
  'repositories (first: 10) {' +
  'edges {' +
  'node {' +
  'name' +
  '}' +
  '}' +
  '}' +
  '}' +
  '}';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {

  data: JSON;
  form: FormGroup;
  list: any[] = [
    { id: '1', name: 'EINS' },
    { id: '2', name: 'ZWEI' },
    { id: '3', name: 'DREI' },
    { id: '4', name: 'VIER' },
    { id: '5', name: 'FUNF' }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.test(1);
    console.log(this.b());
    this.form = this.fb.group({
      list: ['']
    });

    this.list.push({ id: '6', name: 'SECHS' }, { id: '7', name: 'SIEBEN' }, { id: '8', name: 'ACHT' }, { id: '9', name: 'NEUN' }, { id: '10', name: 'ZEHN' });

    this.form.controls.list.patchValue(this.list[5].id);
  }

  test(val) {
    let qry: string;
    switch (val) {
      case 1:
        qry = queryA;
        break;
      case 2:
        qry = queryB;
        break;
      case 3:
        qry = queryC;
        break;
      default:
        qry = queryA;
    }
    this.data = axios.post(githubUrl, { query: qry }, { headers: oauth })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (err) {
        console.log(err);
      })
    console.log("Data to separate = ");
    console.log(this.data);
  }

  a(){
    return "hello darkness my old fren";
  }
  
  b(){
    return this.a();
  }

}
