import java.util.Scanner;

public class Main {
    public static double result = 1; //Global variable

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        double theNumber;
        int thePowerTo;

        System.out.print("Enter in a real number: ");
        theNumber = input.nextDouble();
        System.out.print("Enter in the power it is to be raised to (integer): ");
        thePowerTo = input.nextInt();

        myPower(theNumber,thePowerTo); // No return value expected
        System.out.println("The result is " + result);
    }
    public static void myPower(double number,int powerOf){
        int Count;
        //Double variable result is accessed - so don't declare locally

        for (Count = 1; Count <= powerOf; Count++){
            result = result * number;
        }
    }
}
