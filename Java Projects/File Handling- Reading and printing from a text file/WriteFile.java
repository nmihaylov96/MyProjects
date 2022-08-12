import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        try{
            BufferedWriter bw = new BufferedWriter(new FileWriter("D:\\Test1.txt"));
            bw.write("Hello Everyone!");
            bw.close();
        } catch (IOException e){
            System.out.println("Error IOException is " + e);
        }

    }
}
