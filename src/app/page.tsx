import SectionFooter from "@/section/SectionFooter/SectionFooter";
import SectionHeader from "@/section/SectionHeader/SectionHeader";
// import Organization from "@/components/ui/organization/organization";
import BankAccount from "@/components/ui/BankAccount/BankAccount";
import CopyText from "@/components/ui/CopyNumber/CopyNumber";

export default function Home() {






    return (
      <>
        <SectionHeader></SectionHeader>
          <CopyText text="789012" label="کد فعالسازی" />
          <CopyText
              text="secret-api-key-123"
              label="API Key"
              className="bg-blue-100 text-blue-800"
          />
        {/*<Organization></Organization>*/}
        <SectionHeader></SectionHeader>
      </>

  );
}
