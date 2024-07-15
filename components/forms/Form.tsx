import { FormEvent, ChangeEvent } from "react";
import { Input, TextArea } from "@/components/forms";
import { Spinner } from "@/components/common";

interface Config {
  labelText: string;
  labelId: string;
  type: string;
  value: string | File | null;
  isTextArea?: boolean;
  link?: {
    linkText: string;
    linkUrl: string;
  };
  required?: boolean;
}

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  config: Config[];
  isLoading: boolean;
  btnText: string;
}

export default function Form({
  onSubmit,
  onChange,
  config,
  isLoading,
  btnText,
}: Props) {
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      {config.map((input) =>
        input.isTextArea ? (
          <TextArea
            key={input.labelId}
            labelId={input.labelId}
            onChange={onChange}
            value={typeof input.value === "string" ? input.value : ""} // `string`型に変換
            required={input.required}
            link={input.link}
          >
            {input.labelText}
          </TextArea>
        ) : (
          <Input
            key={input.labelId}
            labelId={input.labelId}
            type={input.type}
            onChange={onChange}
            value={input.type === "file" ? undefined : (input.value as string)} // ファイルフィールドはundefined
            required={input.required}
            link={input.link}
          >
            {input.labelText}
          </Input>
        )
      )}
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={isLoading}
        >
          {isLoading ? <Spinner sm /> : `${btnText}`}
        </button>
      </div>
    </form>
  );
}

