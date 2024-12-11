#include <iostream>
using namespace std;

void mediana(double, double, double);

int main()
{
    setlocale(LC_ALL, "Russian");

    cout << "¬ведите a: " << endl;
    double a;
    cin >> a;

    cout << "¬ведите b: " << endl;
    double b;
    cin >> b;

    cout << "¬ведите c: " << endl;
    double c;
    cin >> c;

    mediana(a, b, c);
    //double m_a = mediana(a, b, c);
    cout << "m_a: " << endl;

}

void mediana(double a, double b, double c) {
    cout << a;
    //return 0.5 * sqrt(2 * pow(b, 2) + 2 * pow(c, 2) + pow(a, 2));
}