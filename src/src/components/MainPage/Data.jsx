export const data = {
  info: {
    _postman_id: "c0263513-a4c5-4786-b001-60fff52bb8c5",
    name: "competence-setting",
    schema:
      "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    _exporter_id: "21037789",
  },
  item: [
    {
      name: "category",
      item: [
        {
          name: "get  all category",
          request: {
            auth: {
              type: "bearer",
              bearer: [
                {
                  key: "token",
                  value: "{{token}}",
                  type: "string",
                },
              ],
            },
            method: "GET",
            header: [],
            url: {
              raw: "{{local_url}}management/competence-setting/category/show",
              host: ["{{local_url}}management"],
              path: ["competence-setting", "category", "show"],
              query: [
                {
                  key: "search",
                  value: "bbbbb",
                  disabled: true,
                },
              ],
            },
          },
          response: [],
        },
        {
          name: "save category",
          request: {
            auth: {
              type: "bearer",
              bearer: [
                {
                  key: "token",
                  value: "{{token}}",
                  type: "string",
                },
              ],
            },
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "name[0]",
                  value: "name",
                  type: "text",
                },
                {
                  key: "image[1]",
                  description: "data",
                  type: "file",
                  src: "/C:/Users/waseem/Downloads/image/1.jpg",
                  disabled: true,
                },
                {
                  key: "name[1]",
                  value: "rehanfdgdfg2",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "image[0]",
                  type: "file",
                  src: "/C:/Users/abc/Downloads/scaffold_qr-26.png",
                },
                {
                  key: "company_id",
                  value: "1",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "{{local_url}}management/competence-setting/category/add",
              host: ["{{local_url}}management"],
              path: ["competence-setting", "category", "add"],
            },
          },
          response: [],
        },
        {
          name: "update category",
          request: {
            auth: {
              type: "bearer",
              bearer: [
                {
                  key: "token",
                  value: "{{token}}",
                  type: "string",
                },
              ],
            },
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "_method",
                  value: "put",
                  type: "text",
                },
                {
                  key: "name[0]",
                  value: "158 update",
                  type: "text",
                },
                {
                  key: "image[0]",
                  type: "file",
                  src: "/C:/Users/Al-Raziq 03214516045/Pictures/Screenshots/Screenshot (260).png",
                },
                {
                  key: "company_id",
                  value: "5",
                  type: "text",
                },
                {
                  key: "name[1]",
                  value: "2",
                  type: "text",
                },
                {
                  key: "image[1]",
                  type: "file",
                  src: "/C:/Users/Al-Raziq 03214516045/Pictures/Screenshots/Screenshot (261).png",
                },
                {
                  key: "id[0]",
                  value: "171",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "{{live_url}}management/competence-setting/category/update",
              host: ["{{live_url}}management"],
              path: ["competence-setting", "category", "update"],
            },
          },
          response: [],
        },
        {
          name: "delete category",
          request: {
            auth: {
              type: "bearer",
              bearer: [
                {
                  key: "token",
                  value: "{{token}}",
                  type: "string",
                },
              ],
            },
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "_method",
                  value: "delete",
                  type: "text",
                },
                {
                  key: "ids[]",
                  value: "170",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "{{live_url}}management/competence-setting/category/delete",
              host: ["{{live_url}}management"],
              path: ["competence-setting", "category", "delete"],
            },
          },
          response: [],
        },
        {
          name: "drop down",
          request: {
            auth: {
              type: "bearer",
              bearer: [
                {
                  key: "token",
                  value: "{{token}}",
                  type: "string",
                },
              ],
            },
            method: "GET",
            header: [],
            url: {
              raw: "{{local_url}}management/competence-setting/category/dropdown",
              host: ["{{local_url}}management"],
              path: ["competence-setting", "category", "dropdown"],
              query: [
                {
                  key: "company_id",
                  value: "4",
                  disabled: true,
                },
              ],
            },
          },
          response: [],
        },
        {
          name: "hard delete",
          request: {
            auth: {
              type: "bearer",
              bearer: [
                {
                  key: "token",
                  value: "{{token}}",
                  type: "string",
                },
              ],
            },
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "_method",
                  value: "delete",
                  type: "text",
                },
                {
                  key: "ids[]",
                  value: "170",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "{{live_url}}management/competence-setting/category/hard-delete",
              host: ["{{live_url}}management"],
              path: ["competence-setting", "category", "hard-delete"],
            },
          },
          response: [],
        },
      ],
    },
    {
      name: "topic",
      item: [
        {
          name: "get all topic",
          request: {
            auth: {
              type: "bearer",
              bearer: [
                {
                  key: "token",
                  value: "{{token}}",
                  type: "string",
                },
              ],
            },
            method: "GET",
            header: [],
            url: {
              raw: "{{live_url}}management/competence-setting/topic/get",
              host: ["{{live_url}}management"],
              path: ["competence-setting", "topic", "get"],
            },
          },
          response: [],
        },
        {
          name: "add topic",
          request: {
            auth: {
              type: "bearer",
              bearer: [
                {
                  key: "token",
                  value: "{{token}}",
                  type: "string",
                },
              ],
            },
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "name[]",
                  value: "topic name",
                  type: "text",
                },
                {
                  key: "category_id",
                  value: "1",
                  type: "text",
                },
                {
                  key: "topic_image[0]",
                  type: "file",
                  src: "/C:/Users/Al-Raziq 03214516045/Pictures/Screenshots/Screenshot (260).png",
                },
                {
                  key: "category_input",
                  value: "test categiry",
                  type: "text",
                },
                {
                  key: "company_id",
                  value: "1",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "{{live_url}}management/competence-setting/topic/add",
              host: ["{{live_url}}management"],
              path: ["competence-setting", "topic", "add"],
            },
          },
          response: [],
        },
        {
          name: "update topic",
          request: {
            auth: {
              type: "bearer",
              bearer: [
                {
                  key: "token",
                  value: "{{token}}",
                  type: "string",
                },
              ],
            },
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "_method",
                  value: "PUT",
                  type: "text",
                },
                {
                  key: "topic_image[]",
                  type: "file",
                  src: "/C:/Users/waseem/Downloads/image/nnn.jpg",
                  disabled: true,
                },
                {
                  key: "category_id",
                  value: "3",
                  type: "text",
                },
                {
                  key: "name[]",
                  value: "dddd",
                  type: "text",
                },
                {
                  key: "topic_image[]",
                  type: "file",
                  src: "/C:/Users/waseem/Downloads/image/images (2).jfif",
                },
                {
                  key: "id",
                  value: "108",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "{{live_url}}management/competence-setting/topic/update",
              host: ["{{live_url}}management"],
              path: ["competence-setting", "topic", "update"],
            },
          },
          response: [],
        },
        {
          name: "delete topic",
          request: {
            auth: {
              type: "bearer",
              bearer: [
                {
                  key: "token",
                  value: "{{token}}",
                  type: "string",
                },
              ],
            },
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "_method",
                  value: "delete",
                  type: "text",
                },
                {
                  key: "ids[]",
                  value: "108",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "{{live_url}}management/competence-setting/topic/delete",
              host: ["{{live_url}}management"],
              path: ["competence-setting", "topic", "delete"],
            },
          },
          response: [],
        },
        {
          name: "topic drop down",
          request: {
            auth: {
              type: "bearer",
              bearer: [
                {
                  key: "token",
                  value: "{{token}}",
                  type: "string",
                },
              ],
            },
            method: "GET",
            header: [],
            url: {
              raw: "{{live_url}}management/competence-setting/topic/dropdown?company_id=1&category_id=4",
              host: ["{{live_url}}management"],
              path: ["competence-setting", "topic", "dropdown"],
              query: [
                {
                  key: "company_id",
                  value: "1",
                },
                {
                  key: "category_id",
                  value: "4",
                },
              ],
            },
          },
          response: [],
        },
        {
          name: "hard delete",
          request: {
            auth: {
              type: "bearer",
              bearer: [
                {
                  key: "token",
                  value: "{{token}}",
                  type: "string",
                },
              ],
            },
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "_method",
                  value: "delete",
                  type: "text",
                },
                {
                  key: "ids[]",
                  value: "4",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "{{local_url}}management/competence-setting/topic/hard-delete",
              host: ["{{local_url}}management"],
              path: ["competence-setting", "topic", "hard-delete"],
            },
          },
          response: [],
        },
      ],
    },
    {
      name: "required document",
      item: [
        {
          name: "get document",
          request: {
            auth: {
              type: "bearer",
              bearer: [
                {
                  key: "token",
                  value: "{{token}}",
                  type: "string",
                },
              ],
            },
            method: "GET",
            header: [],
            url: {
              raw: "{{live_url}}management/competence-setting/required-document/get",
              host: ["{{live_url}}management"],
              path: ["competence-setting", "required-document", "get"],
            },
          },
          response: [],
        },
        {
          name: "required document delete",
          request: {
            auth: {
              type: "bearer",
              bearer: [
                {
                  key: "token",
                  value: "{{token}}",
                  type: "string",
                },
              ],
            },
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "_method",
                  value: "DELETE",
                  type: "text",
                },
                {
                  key: "ids[]",
                  value: "5",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "{{live_url}}management/competence-setting/required-document/delete",
              host: ["{{live_url}}management"],
              path: ["competence-setting", "required-document", "delete"],
            },
          },
          response: [],
        },
        {
          name: "required-document/update",
          request: {
            auth: {
              type: "bearer",
              bearer: [
                {
                  key: "token",
                  value: "{{token}}",
                  type: "string",
                },
              ],
            },
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "_method",
                  value: "PUT",
                  type: "text",
                },
                {
                  key: "id",
                  value: "1",
                  type: "text",
                },
                {
                  key: "name",
                  value: "sfsdfsdf",
                  type: "text",
                },
                {
                  key: "assign_to[]",
                  value: "1",
                  type: "text",
                },
                {
                  key: "image",
                  type: "file",
                  src: "/C:/Users/abc/Downloads/download.jpg",
                },
                {
                  key: "expiry_date",
                  value: "1",
                  type: "text",
                },
                {
                  key: "status",
                  value: "0",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "{{live_url}}management/competence-setting/required-document/update",
              host: ["{{live_url}}management"],
              path: ["competence-setting", "required-document", "update"],
            },
          },
          response: [],
        },
        {
          name: "required-document/add",
          request: {
            auth: {
              type: "bearer",
              bearer: [
                {
                  key: "token",
                  value: "{{token}}",
                  type: "string",
                },
              ],
            },
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "name",
                  value: "sdfsdfsdf",
                  type: "text",
                },
                {
                  key: "assign_to[]",
                  value: "58",
                  type: "text",
                },
                {
                  key: "expiry_date",
                  value: "2022-02-06",
                  type: "text",
                },
                {
                  key: "image",
                  type: "file",
                  src: "/C:/Users/Al-Raziq 03214516045/Pictures/Screenshots/Screenshot (1).png",
                  disabled: true,
                },
                {
                  key: "status",
                  value: "1",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "{{live_url}}management/competence-setting/required-document/add",
              host: ["{{live_url}}management"],
              path: ["competence-setting", "required-document", "add"],
            },
          },
          response: [],
        },
        {
          name: "required-status",
          request: {
            auth: {
              type: "bearer",
              bearer: [
                {
                  key: "token",
                  value: "{{token}}",
                  type: "string",
                },
              ],
            },
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "_method",
                  value: "PUT",
                  type: "text",
                },
                {
                  key: "id",
                  value: "1",
                  type: "text",
                },
                {
                  key: "status",
                  value: "1",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "{{live_url}}management/competence-setting/required-document/required-status",
              host: ["{{live_url}}management"],
              path: [
                "competence-setting",
                "required-document",
                "required-status",
              ],
            },
          },
          response: [],
        },
      ],
    },
    {
      name: "required-certificate-get",
      protocolProfileBehavior: {
        disableBodyPruning: true,
      },
      request: {
        auth: {
          type: "bearer",
          bearer: [
            {
              key: "token",
              value: "{{token}}",
              type: "string",
            },
          ],
        },
        method: "GET",
        header: [],
        body: {
          mode: "formdata",
          formdata: [
            {
              key: "category_id",
              value: "171",
              type: "default",
            },
          ],
        },
        url: {
          raw: "{{live_url}}management/competence-setting/required-certificate/get",
          host: ["{{live_url}}management"],
          path: ["competence-setting", "required-certificate", "get"],
          query: [
            {
              key: "category_id",
              value: "1",
              disabled: true,
            },
            {
              key: "search",
              value: "asdewe",
              disabled: true,
            },
          ],
        },
      },
      response: [],
    },
    {
      name: "add-required-certificate",
      request: {
        auth: {
          type: "bearer",
          bearer: [
            {
              key: "token",
              value: "{{token}}",
              type: "string",
            },
          ],
        },
        method: "POST",
        header: [],
        body: {
          mode: "formdata",
          formdata: [
            {
              key: "name[]",
              value: "certificate",
              type: "text",
            },
            {
              key: "category_id",
              value: "169",
              type: "text",
            },
            {
              key: "topic_id",
              value: "107",
              type: "text",
            },
            {
              key: "image[]",
              type: "file",
              src: "/C:/Users/Hassam Khan/Downloads/download1.jpg",
            },
            {
              key: "category_input",
              value: "sdff",
              type: "default",
              disabled: true,
            },
            {
              key: "topic_input",
              value: "fdfdfdf",
              type: "default",
              disabled: true,
            },
            {
              key: "topic_image",
              type: "file",
              src: "/C:/Users/Hassam Khan/Downloads/download1.jpg",
              disabled: true,
            },
            {
              key: "category_image",
              type: "file",
              src: "/C:/Users/Hassam Khan/Downloads/download.jpg",
              disabled: true,
            },
            {
              key: "category_id",
              value: "4",
              type: "default",
              disabled: true,
            },
            {
              key: "topic_id",
              value: "7",
              type: "default",
              disabled: true,
            },
          ],
        },
        url: {
          raw: "{{live_url}}management/competence-setting/required-certificate/add",
          host: ["{{live_url}}management"],
          path: ["competence-setting", "required-certificate", "add"],
        },
      },
      response: [],
    },
    {
      name: "update-required-certificate",
      request: {
        auth: {
          type: "bearer",
          bearer: [
            {
              key: "token",
              value: "{{token}}",
              type: "string",
            },
          ],
        },
        method: "POST",
        header: [],
        body: {
          mode: "formdata",
          formdata: [
            {
              key: "_method",
              value: "put",
              type: "text",
            },
            {
              key: "id",
              value: "40",
              type: "text",
            },
            {
              key: "name[]",
              value: "asdffdfdseererssssssss122wddwdsdsssqsswsssssssssssss",
              type: "text",
            },
            {
              key: "image[]",
              type: "file",
              src: "/C:/Users/abc/Downloads/images.jpg",
            },
            {
              key: "category_id",
              value: "182",
              type: "text",
            },
            {
              key: "topic_id",
              value: "109",
              type: "text",
            },
            {
              key: "company_id",
              value: "5",
              type: "text",
            },
          ],
        },
        url: {
          raw: "{{local_url}}management/competence-setting/required-certificate/update",
          host: ["{{local_url}}management"],
          path: ["competence-setting", "required-certificate", "update"],
        },
      },
      response: [],
    },
    {
      name: "delete-required-certificate",
      request: {
        auth: {
          type: "bearer",
          bearer: [
            {
              key: "token",
              value: "{{token}}",
              type: "string",
            },
          ],
        },
        method: "POST",
        header: [],
        body: {
          mode: "formdata",
          formdata: [
            {
              key: "_method",
              value: "delete",
              type: "text",
            },
            {
              key: "ids[]",
              value: "3",
              type: "text",
            },
          ],
        },
        url: {
          raw: "{{local_url}}management/competence-setting/required-certificate/delete",
          host: ["{{local_url}}management"],
          path: ["competence-setting", "required-certificate", "delete"],
        },
      },
      response: [],
    },
    {
      name: "certificate hard delete",
      request: {
        auth: {
          type: "bearer",
          bearer: [
            {
              key: "token",
              value: "{{token}}",
              type: "string",
            },
          ],
        },
        method: "POST",
        header: [],
        body: {
          mode: "formdata",
          formdata: [
            {
              key: "_method",
              value: "delete",
              type: "text",
            },
            {
              key: "ids[]",
              value: "2",
              type: "text",
            },
          ],
        },
        url: {
          raw: "{{local_url}}management/competence-setting/required-certificate/hard-delete",
          host: ["{{local_url}}management"],
          path: ["competence-setting", "required-certificate", "hard-delete"],
        },
      },
      response: [],
    },
  ],
};
