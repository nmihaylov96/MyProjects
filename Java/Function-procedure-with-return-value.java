import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        double theNumber, result;
        int thePowerTo;

        System.out.print("Enter in a real number : ");
        theNumber = input.nextDouble();
        System.out.print("Enter in the power it is to be raised to (integer) :");
        thePowerTo = input.nextInt();

        result = myPower(theNumber, thePowerTo); // return value is expected
        System.out.println("The result is " + result);
    }
    static public double myPower(double number, int powerOf) {
        int Count;
        double result = 1.0;
        // multiply the number times the number 'PowerOf' number of times
        for (Count = 1; Count <= powerOf; Count++) {
            result = result * number;
        }
        return result; // exits immediately when 'return' executed
    }
}
