import './App.css';

// 1st method
import { Button, Upload, Spin, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Layout, { Content } from 'antd/lib/layout/layout';
import { useState } from 'react';
// import { Progress } from 'reactstrap';
// import { render } from 'react-dom';

function App() {

  
  const [isLoading, setIsLoading] = useState(false);

  const beforeUpload = (file) => {
    // console.log(file.type);
    const isCsv = file.type === 'text/csv' || file.type === 'text/comma-separated-values' || file.type === 'application/csv' || file.type==='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || file.type==='application/vnd.ms-excel';
    if (!isCsv) {
      message.error('Upload Error: You can only upload CSV/Excel file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 1024;
    if (!isLt2M) {
      message.error('Upload Error: File must be smaller than 10MB!');
    }
    return isCsv && isLt2M;
  }


  const onChangeDocumentUpload = (info) => {
    if (info.file.status === 'uploading') {
      setIsLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      setIsLoading(false);
      
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
      setIsLoading(false);
    }
  }

  

  return (
    <div className="App">
    <Layout>
      {/* <Header>CSV File Upload</Header> */}
      
      <header id="header">
        <div>
        <a href="#dashboard">
        <div className="logo">
        <img src="https://ui.harmony.epsilon.com/reporting/assets/img/messaging-dark.svg" alt="logo"/>
        </div>
        </a>
        </div>
      </header>
      <Spin spinning={isLoading}>
      <Layout>
        <Content>
          <div className="topic">Holiday Season client file Upload</div>
            {/* <div className="upload-container"> */}
                <Upload
                  action={`http://localhost:8080/upload`}
                 // action={`/upload`}
                  name= 'file'
                  listType="picture"
                  maxCount={1}
                  multiple={false}
                  onChange={onChangeDocumentUpload}
                  beforeUpload={beforeUpload}
                  >
                  <Button icon={<UploadOutlined />}>Upload File</Button>
                </Upload>
              {/* </div> */}
            </Content>
          </Layout>
        </Spin>
      </Layout>
    </div>
  );
}

export default App;



// import './App.css';

// // 1st method
// import { Button, Upload, Spin, message, Form, Row, Col, Typography } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// import Layout, { Content } from 'antd/lib/layout/layout';
// import React, { useState } from 'react';

// import axios from 'axios';

// const { Title } = Typography;
// const URL = 'http://localhost:8080/upload';

// const FORM_LAYOUT = {
//   labelCol: {
//     span: 8,
//   }
// }

// const FORM_BTN_LAYOUT = {
//   wrapperCol: {
//     span: 8,
//     offset: 8
//   }
// }

// function App() {
//   const [isLoading, setIsLoading] = useState(false);

//   const uploadFile = (values) => {
//     setIsLoading(true);
//     console.log('values----', values);
//     if(values.imageFile !== undefined && (values.imageFile.file.type === 'text/csv' || values.imageFile.file.type === 'text/comma-separated-values' || values.imageFile.file.type === 'application/csv')) {
//       const data = new FormData();
//       data.append('file', values.imageFile.file.originFileObj);
//       axios.post(URL, data, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         }
//       }).then(response => {
//         setIsLoading(false);
//         message.success(`${values.imageFile.file.name} uploaded successfully!`);
//       }).catch(error => {
//         setIsLoading(false);
//         message.error(error);
//       });
//     } else {
//       setIsLoading(false);
//       message.error('Please select a correct formate of file.');
//     }
//   }
  
//   const beforeUpload = (file) => {
//     const isCsv = file.type === 'text/csv' || file.type === 'text/comma-separated-values' || file.type === 'application/csv';
//     if (!isCsv) {
//       message.error('Upload Error: You can only upload CSV file!');
//     }
//     const isLt2M = file.size / 1024 / 1024 < 10;
//     if (!isLt2M) {
//       message.error('Upload Error: File must be smaller than 10MB!');
//     }
//     if(isCsv && isLt2M) {
//       document.getElementById('file-name').innerHTML = file.name;
//     }
//     return isCsv && isLt2M;
//   }

//   return(
//     <div className="App">
//     <Layout>
//       <header id="header">
//         <div>
//         <a href="#dashboard">
//           <div className="logo">
//             <img src="https://ui.harmony.epsilon.com/reporting/assets/img/messaging-dark.svg" alt="logo" />
//           </div>
//         </a>
//         </div>
//       </header>
//       <Spin spinning={isLoading}>
//         <Layout>
//           <Content>
//             <Row align="middle" justify="center">
//               <Col span={6}>
//               <Title level={2} style={{ fontWeight: "300" }}>File Upload-Antd </Title>
//               <Form name="file-upload-form" {...FORM_LAYOUT} onFinish={uploadFile}>
//                 <Form.Item    name="imageFile">
//                   <Upload beforeUpload={beforeUpload} showUploadList={false}>
//                     <Button icon={<UploadOutlined />}>Click to Upload</Button>
//                     <div id="file-name"></div>
//                   </Upload>
//                 </Form.Item>
//                 <Form.Item {...FORM_BTN_LAYOUT}>
//                   <Button type="primary" htmlType="submit">Upload file</Button>
//                 </Form.Item>
//               </Form>
//               </Col>
//             </Row>
//           </Content>
//         </Layout>
//       </Spin>
//       </Layout>
//     </div>
//   );
// }

// export default App;

// function App() {

//   const [isLoading, setIsLoading] = useState(false);

//   const beforeUpload = (file) => {
//     const isCsv = file.type === 'text/csv' || file.type === 'text/comma-separated-values' || file.type === 'application/csv';
//     if (!isCsv) {
//       message.error('Upload Error: You can only upload CSV file!');
//     }
//     const isLt2M = file.size / 1024 / 1024 < 10;
//     if (!isLt2M) {
//       message.error('Upload Error: File must be smaller than 10MB!');
//     }
//     return isCsv && isLt2M;
//   }


//   const onChangeDocumentUpload = (info) => {
//     if (info.file.status === 'uploading') {
//       setIsLoading(true);
//       return;
//     }
//     if (info.file.status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully`);
//       setIsLoading(false);
//     } else if (info.file.status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="App">
//     <Layout>
//       {/* <Header>CSV File Upload</Header> */}
      
      // <header id="header">
      //   <div>
      //   <a href="#dashboard">
      //   <div className="logo">
      //   <img src="https://ui.harmony.epsilon.com/reporting/assets/img/messaging-dark.svg" alt="logo"/>
      //   </div>
      //   </a>
      //   </div>
      // </header>
//       <Spin spinning={isLoading}>
//       <Layout>
//         <Content>
//           <div className="topic">File Upload Utility</div>
//             {/* <div className="upload-container"> */}
//                 <Upload
//                   action={`http://localhost:8080/upload`}
//                   name= 'file'
//                   listType="picture"
//                   maxCount={1}
//                   multiple={false}
//                   onChange={onChangeDocumentUpload}
//                   beforeUpload={beforeUpload}
//                   >
//                   <Button icon={<UploadOutlined />}>Upload CSV</Button>
//                 </Upload>
//               {/* </div> */}
//             </Content>
//           </Layout>
//         </Spin>
//       </Layout>
//     </div>
//   );
// }

// export default App;

// 2nd method
// import { Upload, message, Button } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// function App() {
//   const props = {
//     name: 'file',
//     action: 'http://localhost:5000/upload',
//     // headers: {
//     //   authorization: 'authorization-text',
//     // },
//     onChange(info) {
//       if (info.file.status !== 'uploading') {
//         console.log(info.file, info.fileList);
//       }
//       if (info.file.status === 'done') {
//         message.success(`${info.file.name} file uploaded successfully`);
//       } else if (info.file.status === 'error') {
//         message.error(`${info.file.name} file upload failed.`);
//       }
//     },
//     progress: {
//       strokeColor: {
//         '0%': '#108ee9',
//         '100%': '#87d068',
//       },
//       strokeWidth: 3,
//       format: percent => `${parseFloat(percent.toFixed(2))}%`,
//     },
//   };
//   return(
//     <Upload {...props}>
//       <Button icon={<UploadOutlined />}>Click to Upload</Button>
//     </Upload>
//   );

// }
// export default App;



// 3rd method
// import React from 'react';
// import { Upload, message } from 'antd';
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

// function getBase64(img, callback) {
//   const reader = new FileReader();
//   reader.addEventListener('load', () => callback(reader.result));
//   reader.readAsDataURL(img);
// }

// function beforeUpload(file) {
//   const isCsv = file.type === 'text/csv' || file.type === 'text/comma-separated-values' || file.type === 'application/csv';
//   if (!isCsv) {
//     message.error('Upload Error: You can only upload CSV file!');
//   }
//   const isLt2M = file.size / 1024 / 1024 < 10;
//   if (!isLt2M) {
//     message.error('Upload Error: File must be smaller than 10MB!');
//   }
//   return isCsv && isLt2M;
// }

// class App extends React.Component {
//   state = {
//     loading: false,
//   };

//   handleChange = info => {
//     if (info.file.status === 'uploading') {
//       this.setState({ loading: true });
//       return;
//     }
//     if (info.file.status === 'done') {
//       // Get this url from response in real world.
//       getBase64(info.file.originFileObj, imageUrl =>
//         this.setState({
//           imageUrl,
//           loading: false,
//         }),
//       );
//     }
//   };

//   render() {
//     const { loading, imageUrl } = this.state;
//     const uploadButton = (
//       <div>
//         {loading ? <LoadingOutlined /> : <PlusOutlined />}
//         <div style={{ marginTop: 0 }}>Upload CSV</div>
//       </div>
//     );
//     return (
//       <Upload
//         name="file"
//         listType="picture-card"
//         // className="avatar-uploader"
//         showUploadList={false}
//         action="http://localhost:5000/upload"
//         beforeUpload={beforeUpload}
//         onChange={this.handleChange}
//       >
//         {imageUrl ? <img src={imageUrl}  style={{ width: '100%' }} /> : uploadButton}
//       </Upload>
//     );
//   }
// }

// export default App;

