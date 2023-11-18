This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, Install neccesary packages:

```bash

yarn

```

Second, run the development server:

```bash

yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## External Packages

- react-feather
- Antd
- react-hot-toast
- axios

## Code Structure

everything students can be found in the `src/components/students`

everything teachers can be found in the `src/components/teachers`

all auths on user can be found in the `src/context/AuthContext`

all json data can be found in the `src/fake-db`

### Pending Features

[x] -Disable Lesson

[x] -Retake Lesson


## Logins

### Student Login
username : olamide

password: password

role: student

### Teacher Login

username : choko1

password: password

role: teacher

# Project Flow

### Student Flow

![image](https://github.com/tylerjusfly/CHF_TASKS/assets/53145644/1a09d9ba-56f8-4adc-b0ad-5edee7b09233)

As a logged In student, the home page is where you can find lesson you have enrolled in.

To enroll for a new lesson, you can click on the available lessons tab and click on any lessons you'd like to start.
![image](https://github.com/tylerjusfly/CHF_TASKS/assets/53145644/d0b81734-f8e8-4d34-b914-9c782c343404)

![image](https://github.com/tylerjusfly/CHF_TASKS/assets/53145644/52d961ea-8cb8-4af9-abe5-1999edbc9968)

Clicking the start lesson button opens an IDE to write your code
![image](https://github.com/tylerjusfly/CHF_TASKS/assets/53145644/1b433b58-80ca-4337-8734-8c4e13e0be0b)

At the bottom of your IDE, the Complie and execute button compiles your code and returns an output in the output box.

`Note Compiling the code also serves as the submit button that submits your lesson and mark it as completed`

### Teacher's Flow

![image](https://github.com/tylerjusfly/CHF_TASKS/assets/53145644/c0312b73-8641-4443-b4a5-24e26fe9e272)

After teacher is logged in, going to the Track lessons tab displays all enrolled lessons. (Complete or Incomplete) , selecting a lesson provides us with a modal that contains lesson details , student details, comment box and buttons to view student solution or discard solution if lesson solution is unacceptable

![image](https://github.com/tylerjusfly/CHF_TASKS/assets/53145644/950fe614-68eb-4514-9b8e-a896b08cc1e6)

