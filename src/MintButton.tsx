import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { CandyMachine } from "./candy-machine";
import { CircularProgress } from "@material-ui/core";
import { GatewayStatus, useGateway } from "@civic/solana-gateway-react";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { toDate } from "./utils";

export const CTAButton = styled(Button)`
  box-shadow: 0 0 0 4px rgb(109 73 255 / 40%), 0 -8px 0 0 rgb(109 73 255 / 20%),
    -8px 0 0 0 rgb(109 73 255 / 20%), 8px 0 0 0 rgb(109 73 255 / 40%),
    0 8px 0 0 rgb(109 73 255 / 40%);
`; // add your styles here

export const CounterText = styled.span``; // add your styles here

export const MintButton = ({
  onMint,
  candyMachine,
  isMinting,
}: {
  onMint: () => Promise<void>;
  candyMachine: CandyMachine | undefined;
  isMinting: boolean;
}) => {
  const { requestGatewayToken, gatewayStatus } = useGateway();
  const [clicked, setClicked] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isActive, setIsActive] = useState(false); // true when countdown completes

  useEffect(() => {
    setIsVerifying(false);
    if (
      gatewayStatus === GatewayStatus.COLLECTING_USER_INFORMATION &&
      clicked
    ) {
      // when user approves wallet verification txn
      setIsVerifying(true);
    } else if (gatewayStatus === GatewayStatus.ACTIVE && clicked) {
      console.log("Verified human, now minting...");
      onMint();
      setClicked(false);
    }
  }, [gatewayStatus, clicked, setClicked, onMint]);

  return (
    <CTAButton
      style={{
        zIndex: 10,
        fontFamily: "VT323, monospace",
        display: "block",
        margin: "0 auto",
        fontSize: "1.5rem",
        padding: "0.5rem 1.5rem",
        backgroundImage: "linear-gradient(180deg, #cba2ff, #300095)",
      }}
      disabled={
        candyMachine?.state.isSoldOut || isMinting || !isActive || isVerifying
      }
      onClick={async () => {
        if (
          isActive &&
          candyMachine?.state.gatekeeper &&
          gatewayStatus !== GatewayStatus.ACTIVE
        ) {
          console.log("Requesting gateway token");
          setClicked(true);
          await requestGatewayToken();
        } else {
          console.log("Minting...");
          await onMint();
        }
      }}
      variant="contained"
    >
      {!candyMachine ? (
        "CONNECTING..."
      ) : candyMachine?.state.isSoldOut ? (
        "SOLD OUT"
      ) : isActive ? (
        isVerifying ? (
          "VERIFYING..."
        ) : isMinting ? (
          <CircularProgress />
        ) : (
          "MINT"
        )
      ) : candyMachine?.state.goLiveDate ? (
        <Countdown
          date={toDate(candyMachine?.state.goLiveDate)}
          onMount={({ completed }) => completed && setIsActive(true)}
          onComplete={() => {
            setIsActive(true);
          }}
          renderer={renderCounter}
        />
      ) : (
        "UNAVAILABLE"
      )}
    </CTAButton>
  );
};

const renderCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <CounterText>
      {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};
