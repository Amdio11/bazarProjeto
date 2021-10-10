# bazarProjeto 10/10/2021
Projeto usando modal e gerando o APK
<p align="center">
  <b>MODAL E APK</b>
</p>
<p align="center">
Desenvolvendo app com modal e <br>
Criando a chave de assinatura privada ultilizando<br>
a ferramenta Keytool, disponível no JDK.
</p>
<p align="center">
<img width="800px" src="https://github.com/Amdio11/bazarProjeto/blob/main/images/app.aab.png">
</p>
<p align="center">
<b> Instalação </b>
</p>
<p align="center">
1) Baixe o projeto
</p>
<p align="center">
2) Abra o projeto no Visual Studio Code
</p>
<p align="center">
3) Abra o Terminal no Visual Studio Code e execute o comando <b>npm install</b>
</p>
<p align="center">
1. Criando a minha chave usando o comando:npx keytool -genkeypair -v -keystore minha_chave.keystore -alias meu_atalho_da_chave -keyalg RSA -keysize 2048 -validity 10000<br>
2. Fornecido todas as informações solicitadas no terminal para a geração da chave<br>
3. Adcionando a chave ao projeto android/app com a configuração das variáveis do Gradle em android/gradle.properties<br>
4. Em android/app/build.gradle em sigingCofigs editado o codigo<br>
5. No terminal dentro da pasta android execultado o comando ./gradlew bundleRelease(gerando o APK)<br>
** O pacote completo do arquivo para enviar para as lojas(Google Play ou Amazon Appstore, por exemplo),está no arquivo “android/app/build/uotputs/bundle/release/app.aab”.<br>
6. Em def enableSeparateBuildPerCPUArchitecture trocado o false pelo true<br>
7. Em splits removido a referencia "x86"<br>
8. Em universalApk trocado false por true<br>
9. Em def enableProguardInReleaseBuilds trocado false por true<br>
<br>
</p>
<p align="center">
<img width="200px" src="https://github.com/Amdio11/senai-versoes-colaboracoes/blob/master/img/Estudando.png">
</p>
<p align="center">
<b> A minha parxceirinha de aventuras e estudos </b>
</p>


