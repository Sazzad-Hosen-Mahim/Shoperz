import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CommonWrapper from "../CommonWrapper";

const Collection = () => {
  return (
    <div>
      <CommonWrapper>
        <div>
          <RadioGroup
            defaultValue="option-one"
            className="flex justify-between px-[150px]"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option-one"
                id="option-one"
                className="text-black border-black"
              />
              <Label htmlFor="option-one text-geist ">All Collection</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option-two"
                id="option-two"
                className="text-black border-black"
              />
              <Label htmlFor="option-two text-geist">New Collection</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option-three"
                id="option-three"
                className="text-black border-black"
              />
              <Label htmlFor="option-three text-geist">What&apos;s Hot</Label>
            </div>
          </RadioGroup>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Collection;
