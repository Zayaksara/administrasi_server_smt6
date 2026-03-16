# Remote SSH dari AWS EC2 Server

1. unduh dan Install Putty di https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html
![alt text](image-1.png)
![alt text](image.png)

2. Konversi ekstensi Private Key dari .pem menjadi .ppk
    - Buka Putty Gen
    ![alt text](image-2.png)
    - Load Private Key .pem 
    ![alt text](image-3.png)
    - Klik Save Private Key menjadi ekstensi File .ppk
    ![alt text](image-4.png)


3. Setting-Up Remote SSH dengan Putty
    - isi Ipv4 addres Public data berasal dari instance masing2
    ![alt text](image-5.png)
    - port SSH (22)
    ![alt text](image-6.png)
    - load private key .ppk di menu Connection->SSH->Auth->Credential
    ![alt text](image-7.png)
    - user dari instance masing-masing (ubuntu)
    ![alt text](image-8.png)

4. Setiap awal Remote kita lakukan Patching OS
 - sudo apt-get update && sudo apt-get upgrade 
 ![alt text](image-9.png)

5. coba lakukan instalasi Web Server 
 dalam keadaan Kosong
 ![alt text](image-10.png)
 instal salah satu web server 
 sudo apt install nginx 
![alt text](image-11.png)
![alt text](image-12.png)
![alt text](image-13.png)