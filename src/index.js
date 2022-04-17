// const obj1 = {
//   name: "主田",
//   age: 24,
// };
// console.log(obj1)

// //プロパティ値を変更
// obj1.name = "nusida";
// console.log(obj1)
// //プロパティを追加
// obj1.address = "tokyo"
// console.log(obj1)

//テンプレート文字列
// const name = "主田";
// const age = 24;
// const messege =`私の名前は${name}です。年齢は${age}です。`
// console.log(messege)

//従来の関数を定義
// function func1(value){
//   return value;
// }
// //実行した結果を出力
// console.log(func1("func1です"));

// //アロー関数を定義
// const func2 = (value1) => {
//   return value1;
// }
// //実行した結果を出力
// console.log(func2("func2です"));

//処理を単一行で返すので、{}を省略する
// const func4 = (num1,num2) => num1 + num2;
// console.log(func4(10,20))

//分割代入を使用しない場合
// const myprofile = {
//   name: "主田",
//   age: "24"
// };
// const messege = `私の名前は${myprofile.name}で、年齢は${myprofile.age}です`;
// console.log(messege)

//分割代入を使用した場合
// const myprofile = {
//   name: "主田",
//   age: 24
// };
// const {name,age} = myprofile;
// const messege =`私の名前は${name}で、年齢は${age}です`;
// console.log(messege);

// const myprofile = {
//   name:"主田",
//   age:24,
// };
// //コロンで別の変数名を使用する
// const {name:newname, age:newage} = myprofile;
// const messege = `私の名前は${newname}で、年齢は${newage}です`
// console.log(messege)

// const myprofile = ["主田", 24];
// //配列の分割代入
// const [name, age] =myprofile;
// const messege = `私の名前は${name}です。年齢は${age}歳です}`;
// console.log(messege)

// //デフォルト値の設定
// const sayhello = (name = "ゲスト")　　=> console.log(`こんにちは${name}さん`)

// sayhello();//こんにちはゲストさん
// sayhello("主田")//こんにちは主田さん

// const arr1 = [1,2];

// const summaryfunc = (num1, num2) => console.log(num1 + num2)
// //普通に配列の値を渡すとき
// // summaryfunc(arr1[0],arr1[1])
// //スプレッド構文を使った場合
// summaryfunc(...arr1)

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// //要素をまとめる
// const arr7 = [...arr4, ...arr5];
// console.log(arr7)

// const arr4 = [10, 20];
// //＝でコピー
// const arr8 = arr4;
// console.log(arr8)

// //配列を定義
// const nameArr = ["主田", "先岡", "後藤"]
// //配列.map(関数)として使用する
// nameArr.map((name) => console.log(name));

//filter関数で奇数のみ取り出す
//配列を定義
// const numArr = [1, 2, 3, 4, 5];

// const newNumArr = numArr.filter((num) =>{
//     return num % 2 === 1;
// })
// console.log(newNumArr);
