using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp3
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            // определение количества строк в textbox (TxBx)
           int n = textBox1.Lines.Count();
            // объявление нового одномерного массива a []
            double [] a = new double[n];
            // заполнение массива а данными из textbox
            for (int i = 0; i < a.Length; i++)
            {
                a[i] = double.Parse(textBox1.Lines[i]);
            }


           

            double t = a[0];
            double b = a[0];

            for (int i = 1; i < a.Length; i++)
            {
                if (t > a[i])
                {
                    t = a[i];
                }
            }


            for (int i = 1; i < a.Length; i++)
            {
                if (b < a[i])
                {
                    b = a[i];
                }
            }

            for (int i = 0; i < a.Length; i++)
            {
                if (a[i] < 0)
                {
                    a[i] = t;
                }
                else if (a[i] > 0)
                {
                    a[i] = b;
                }
            }

            for (int i = 0; i < a.Length; i++)
            {
                listBox1.Items.Add(a[i]);
            }
        }
    }
}
