// import { useRef, useState } from "react";

// export const InputItem = (props: InputProps) => {
//   const [isValid, setValid] = useState(false);
//   const inputRef = useRef(null);
//   const inputId = useId("input");
//   const styles = useStyles();

//   const onChange = () => {
//     (inputRef as any)?.current.validity.valid ? setValid(true) : setValid(false);
//   }

//   return (
//     <div className={styles.root}>
//       {/* <Label htmlFor={inputId} size={props.size} disabled={props.disabled}>
//         Name
//       </Label> */}
//       <Field label={'Name'} validationState={isValid ? 'success' : 'error'} validationMessage={isValid ? '' : 'Value is required.'}>
//         <Input ref={inputRef} onChange={onChange} id={inputId} {...props} />
//       </Field>
//     </div>
//   );
// };

// // const argTypes: ArgTypes = {
// //   // Add these native props to the props table and controls pane
// //   placeholder: {
// //     description:
// //       "Placeholder text for the input. If using this instead of a label (which is " +
// //       "not recommended), be sure to provide an `aria-label` for screen reader users.",
// //     type: { name: "string", required: false }, // for inferring control type
// //     table: { type: { summary: "string" } }, // for showing type in prop table
// //   },
// //   disabled: {
// //     description: "Whether the input is disabled",
// //     type: { name: "boolean", required: false },
// //     table: { type: { summary: "boolean" } },
// //   },
// //   // Hide these from the props table and controls pane
// //   children: { table: { disable: true } },
// //   as: { table: { disable: true } },
// // };