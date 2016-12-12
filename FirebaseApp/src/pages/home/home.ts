import { Component, OnInit, NgZone } from '@angular/core';
import firebase from 'firebase';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register'
import { Camera } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  currentUser: any; // Classe base de usuário "seção"
  credentials: { email?: string, password?: string } = {};
  // trabalhando com camera, variável para guardar as imagens
  profile_picture: string;
  profileRef: any;

  constructor(public ngZone: NgZone, public navCtrl: NavController) {
    this.ngZone = ngZone;

    this.profile_picture = null;
  }

  // primeira coisa que roda após a compilação, e dnetro do run é consistente
  ngOnInit() {
    firebase.auth().onAuthStateChanged(_currentUser => {
      this.ngZone.run(() => {
        // Verificando se existe alguma seção ativa
        if (this.currentUser) {
          this.currentUser = _currentUser;

          // instanciando variável da referencia da imagem
          this.profileRef = firebase.database().ref('profile/'
            + firebase.auth().currentUser.uid
            + '/profile_picture');

          this.profileRef.on('value', snapshot => {
            this.updateImage(snapshot);
          });
        }
        else
          this.currentUser = null;
      });
    });
  }

  doLogin(_credentials) {
    if (_credentials.valid) {
      firebase.auth()
        .signInWithEmailAndPassword(_credentials.value.email, _credentials.value.password)
        .then(() => { }, e => { console.error(e); })
    }
  }

  doLogout() {
    firebase.auth()
      .signOut()
      .then(() => { }, e => { this.navCtrl.setRoot(RegisterPage); })
  }

  getRegister() {
    this.navCtrl.setRoot(RegisterPage);
  }

  takePicture() {
    // plugin para capturar a imagem da camera. Esta função espera como parametro um objeto
    Camera.getPicture({
      quality: 50, // Qual é a qualidade da camera, para não pegar uma imagem muito grande
      allowEdit: true, // Permite edição na foto, entregando a edição para o aparelho
      cameraDirection: Camera.Direction.FRONT,
      destinationType: Camera.DestinationType.DATA_URL // Quando tirar foto o retorno vai ser uma string em base64
    }).then((imageData) => {
      firebase.database()
        .ref('profile/' + firebase.auth().currentUser.uid)
        .update({ profile_picture: imageData });
    }, () => { });
  }

  updateImage(value) {
    if (value != null)
      this.profile_picture = 'data:image/jpeg;base64,' + value.val();
    else
      this.profile_picture = null
  }
}
