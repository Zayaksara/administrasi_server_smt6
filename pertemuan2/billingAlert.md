# membuat billing alert di aws untuk menghindari kelebihan alokasi dana
1. Menu dahsboard AWS kita pilih billing preference untuk mengaktifkan alert
- menu biling and cost management
![alt text](image.png)
- pilih menu billing preferences paling bawah
![alt text](image-1.png)
- pilih menu alert preference klik edit
![alt text](image-2.png)
- isi email ceklis receive
![alt text](image-11.png)
- klik Update
![alt text](image-4.png)
2. menu CLoudwath
- all service
![alt text](image-5.png)
- cloudWatch
![alt text](image-6.png)

3. Create Alarm
- Buat Alarm
![alt text](image-7.png)
- Pastikan region ada di US N Virginia
![alt text](image-8.png)
- klik Metric
![alt text](image-12.png)
- klik menu billing
![alt text](image-13.png)
- pilih total perkiraan Biaya
![alt text](image-14.png)
- ceklis Mata uang USD 
![alt text](image-16.png)
- Pilih Matrik 
![alt text](image-10.png)
- beri nama Alert = NIM_BillingAlert
![alt text](image-17.png)
- COnditions Static->Greathertha-> 1 USD
![alt text](image-18.png)
- Create new Topic = > NIM_BillingAlert -> Klik Create
![alt text](image-19.png)
- Select an existing SNS topic - > NIM_BillingAlert
![alt text](image-20.png)
- Klik Next
- Alarm Name -> NIM_BillingAlert
![alt text](image-21.png)
- Create Alarm
![alt text](image-22.png)
- Buka Inbox/Spam Email dari AWS kemudian Klik Confirm
![alt text](image-23.png)
![alt text](image-24.png)
![alt text](image-25.png)
![alt text](image-26.png)