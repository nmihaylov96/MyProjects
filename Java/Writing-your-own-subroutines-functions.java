public class Main {
    public static void main(String[] args) {
        int Num1 = 3;
        int Num2 = 4;
        int Val;
        Val = myMaths(Num1,Num2);
        System.out.println("The result is " + Val);
    }
    private static int myMaths(int A,int B){
        int result;
        result = A + B;
        return result;
    }

}
