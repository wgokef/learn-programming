using System;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            
            
            double start = -3;
            double end = 3;
            double step = 0.25;

            for (double x = start; x <= end; x += step)
            {
                Console.WriteLine($"f({x}) = {f(x)}");
            }
        }

        static double f(double x)
        {
            if (x > 2)
            {
                return Math.Exp(x);
            }
            if (-2 <= x && x <= 2)
            {
                return x + 4;
            }
            if (x < -2)
            {
                return 0;
            }

            return 0;
        }
    }
}

