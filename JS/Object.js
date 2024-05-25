var speed_boost = 1;
Niv = sessionStorage.getItem('Niv');

if (Niv == 1){
    speed_boost = 1;
}
else if (Niv == 2){
    speed_boost = 2;
}
else if (Niv == 3){
    speed_boost = 3;
}



const buche1_av = new MyObjects("log_av", 30*speed_boost, "left", 75);
const buche1_ar = new MyObjects("log_ar", 30*speed_boost, "left", 75);
const buche2_av = new MyObjects("log_av", 30*speed_boost, "left", 75);
const buche2_ar = new MyObjects("log_ar", 30*speed_boost, "left", 75);
const buche3_av = new MyObjects("log_av", 30*speed_boost, "left", 75);
const buche3_ar = new MyObjects("log_ar", 30*speed_boost, "left", 75);


const buche4_av = new MyObjects("log_av", 40*speed_boost, "left", 75);
const buche4_mi = new MyObjects("log_mi", 40*speed_boost, "left", 75);
const buche4_ar = new MyObjects("log_ar", 40*speed_boost, "left", 75);
const buche5_av = new MyObjects("log_av", 40*speed_boost, "left", 75);
const buche5_mi = new MyObjects("log_mi", 40*speed_boost, "left", 75);
const buche5_ar = new MyObjects("log_ar", 40*speed_boost, "left", 75);
const buche6_av = new MyObjects("log_av", 40*speed_boost, "left", 75);
const buche6_mi = new MyObjects("log_mi", 40*speed_boost, "left", 75);
const buche6_ar = new MyObjects("log_ar", 40*speed_boost, "left", 75);
const buche7_av = new MyObjects("log_av", 40*speed_boost, "left", 75);
const buche7_mi = new MyObjects("log_mi", 40*speed_boost, "left", 75);
const buche7_ar = new MyObjects("log_ar", 40*speed_boost, "left", 75);


const buche8_av = new MyObjects("log_av", 45*speed_boost, "left", 75);
const buche8_mi = new MyObjects("log_mi", 45*speed_boost, "left", 75);
const buche8_mi2 = new MyObjects("log_mi", 45*speed_boost, "left", 75);
const buche8_ar = new MyObjects("log_ar", 45*speed_boost, "left", 75);
const buche9_av = new MyObjects("log_av", 45*speed_boost, "left", 75);
const buche9_mi = new MyObjects("log_mi", 45*speed_boost, "left", 75);
const buche9_mi2 = new MyObjects("log_mi", 45*speed_boost, "left", 75);
const buche9_ar = new MyObjects("log_ar", 45*speed_boost, "left", 75);


const blocTurtle1_Turtle1 = new MyObjects("turtle", 55*speed_boost, "right", 80);
const blocTurtle1_Turtle2 = new MyObjects("turtle", 55*speed_boost, "right", 80);
const blocTurtle1_Turtle3 = new MyObjects("turtle", 55*speed_boost, "right", 80);
const blocTurtle2_Turtle1 = new MyObjects("turtle", 55*speed_boost, "right", 80);
const blocTurtle2_Turtle2 = new MyObjects("turtle", 55*speed_boost, "right", 80);
const blocTurtle2_Turtle3 = new MyObjects("turtle", 55*speed_boost, "right", 80);
const blocTurtle3_Turtle1 = new MyObjects("turtle", 55*speed_boost, "right", 80);
const blocTurtle3_Turtle2 = new MyObjects("turtle", 55*speed_boost, "right", 80);
const blocTurtle3_Turtle3 = new MyObjects("turtle", 55*speed_boost, "right", 80);


const blocTurtle4_Turtle1 = new MyObjects("turtle", 70*speed_boost, "right", 80);
const blocTurtle4_Turtle2 = new MyObjects("turtle", 70*speed_boost, "right", 80);
const blocTurtle4_Turtle3 = new MyObjects("turtle", 70*speed_boost, "right", 80);
const blocTurtle5_Turtle1 = new MyObjects("turtle", 70*speed_boost, "right", 80);
const blocTurtle5_Turtle2 = new MyObjects("turtle", 70*speed_boost, "right", 80);
const blocTurtle5_Turtle3 = new MyObjects("turtle", 70*speed_boost, "right", 80);
const blocTurtle6_Turtle1 = new MyObjects("turtle", 70*speed_boost, "right", 80);
const blocTurtle6_Turtle2 = new MyObjects("turtle", 70*speed_boost, "right", 80);
const blocTurtle6_Turtle3 = new MyObjects("turtle", 70*speed_boost, "right", 80);

const c1_1 = new MyObjects("car1", 30*speed_boost, "left", 65);

const c2_1 = new MyObjects("car2", 30*speed_boost, "right", 65);
const c2_2 = new MyObjects("car2", 30*speed_boost, "right", 65);
const c2_3 = new MyObjects("car2", 30*speed_boost, "right", 65);

const c3_1 = new MyObjects("car3", 30*speed_boost, "left", 65);
const c3_2 = new MyObjects("car3", 30*speed_boost, "left", 65);

const c4_1 = new MyObjects("car4", 30*speed_boost, "right", 65);
const c4_2 = new MyObjects("car4", 30*speed_boost, "right", 65);
const c4_3 = new MyObjects("car4", 30*speed_boost, "right", 65);

const t1_1 = new MyObjects("truck", 30*speed_boost, "right", 170);
const t1_2 = new MyObjects("truck", 30*speed_boost, "right", 170);