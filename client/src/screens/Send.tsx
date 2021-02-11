import { Card, Input } from 'components';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const Send = (): JSX.Element => {
    const address = useSelector((state: RootState) => state.wallet.address);
    const [senderAddress, setSenderAddress] = useState(address);
    const [recipientAddress, setRecipientAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [fees, setFees] = useState('');

    return (
        <div className="pt-4">
            <Card className="px-3 py-2">
                <h4>Send transaction</h4>
                <form className="d-block">
                    <Input
                        disabled
                        className="mb-4"
                        value={senderAddress}
                        inputClass="form-control"
                        onChange={(event) => setSenderAddress(event.target.value)}
                        label="Sender"
                        id="senderInput"
                    />
                    <Input
                        required
                        className="mb-4"
                        onChange={(event) => setRecipientAddress(event.target.value)}
                        inputClass="form-control"
                        value={recipientAddress}
                        label="Recipient"
                        id="recipientInput"
                    />
                    <Input
                        required
                        className="mb-4"
                        inputClass="form-control"
                        onChange={(event) => {
                            setAmount(event.target.value);
                            setFees((parseFloat(event.target.value) / 10).toFixed(5));
                        }}
                        value={amount}
                        type="number"
                        label="Amount"
                        id="amountInput"
                    />
                    <Input
                        className="d-flex align-items-center justify-content-between"
                        value={fees}
                        disabled
                        label="Transaction Fees"
                    />
                    <button className="btn btn-primary" type="submit">
                        Send
                    </button>
                </form>
            </Card>
        </div>
    );
};

export default Send;
