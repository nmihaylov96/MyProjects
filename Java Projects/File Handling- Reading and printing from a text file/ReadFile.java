import java.util.*;
import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        int lineCount = 1;
        try {
            File inputFile = new File("D:\\VSC for Java (Nikolay)\\File Handling- Reading and printing from a text file\\Jcode.txt");
            Scanner rf = new Scanner(inputFile);
            String fileLine;
            while (rf.hasNext()){
                fileLine = rf.nextLine(); // or use next() to get word
                System.out.println(lineCount + " " + fileLine);
                lineCount++;
            }
            rf.close();
        } catch (IOException e) {
            System.out.println("Error IOException is " + e);
        }
    }
}
