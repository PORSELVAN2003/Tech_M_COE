public class ElectricCar extends Car{
private String battery_model;
private int range;
private int charge_remaining;



    public void setBattery_model(String battery_model) {
        this.battery_model = battery_model;
    }

    public String getBattery_model(){
        return battery_model;

    }

    public void setrange(int range){
        this.range=range;
    }

    public int getrange(){
        return range;
    }


    public void setCharge_remaining(int Charge_remaining){
        this.charge_remaining=charge_remaining;

    }

    public int getCharge_remaining(){
        return charge_remaining;
    }


    public static void startengine(){
        System.out.println("engine started....");
    }

    public static void main(String[] args) {
        ElectricCar car=new ElectricCar();
        car.setBattery_model("lithium");
        car.setrange(20);
        car.setCharge_remaining(60);

        System.out.println("Battery model" + " " + car.getBattery_model());
        System.out.println("Battery range" + " " +car.getrange());
        System.out.println("Battery model" + " " +car.getCharge_remaining());
        car.start_engine();

        car.start_engine();


    }
}
