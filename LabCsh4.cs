using System;

namespace ConsoleApp3
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Введите a: ");
            double a = Convert.ToDouble(Console.ReadLine());

            Console.Write("Введите b: ");
            double b = Convert.ToDouble(Console.ReadLine());

            Console.Write("Введите c: ");
            double c = Convert.ToDouble(Console.ReadLine());

            double m_a = Mediana(a, b, c);
            Console.WriteLine($"m_a: {m_a}");
        }

        static double Mediana(double a, double b, double c)
        {
            return 0.5 * Math.Sqrt(2 * Math.Pow(b, 2) + 2 * Math.Pow(c, 2) + Math.Pow(a, 2));
        }
    }
}
    

