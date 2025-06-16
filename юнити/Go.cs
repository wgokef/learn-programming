using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Go : MonoBehaviour
{
    [SerializeField] CharacterController controller;
    [SerializeField] float speed = 5f;
    Vector3 direction;

    float gravity = 5f;
    float jumpForce = 5f;

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        float moveHorizontal = Input.GetAxis("Horizontal");
        float moveVertical = Input.GetAxis("Vertical");

        // ��������, ��������� �� �������� �� �����
        // if(controller.isGrounded){
        direction = new Vector3(moveHorizontal, 0, moveVertical);
        direction = transform.TransformDirection(direction) * speed;

        // ������
        if (Input.GetKey(KeyCode.Space))
        {
            direction.y = jumpForce;
        }

        // ���
        if (Input.GetKey(KeyCode.LeftShift))
        {
            speed = 10f;
        }
        else
        {
            speed = 5f;
        }
        // }

        // ����� ������� ������� �������
        direction.y -= gravity * Time.deltaTime;

        // ��������� ���������
        controller.Move(direction * Time.deltaTime);
    }
}