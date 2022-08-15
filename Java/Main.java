import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        double theNumber;
        int thePowerTo;

        System.out.print("Enter in a real number: ");
        theNumber = input.nextDouble();
        System.out.print("Enter in the power it is to be raised to (integer): ");
        thePowerTo = input.nextInt();

        myPower(theNumber,thePowerTo); //No return value expected
    }

    //Of "powerOf". Input values are passed in the two parameters.
    static public void myPower(double number,int powerOf){
        int Count;
        double result = 1.0;
        //Multiply the number times the number "powerOf" number of times.

        for (Count = 1;Count <= powerOf;Count++){
            result = result * number;
        }
        System.out.println("The result is " + result);
    }
}